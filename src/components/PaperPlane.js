import { useEffect, useRef } from "react";
import { SendFill } from "react-bootstrap-icons";

// A smooth closed loop (percent-of-viewport units) that sweeps past every
// edge of the page. Built entirely from S (smooth-curve) segments so the
// tangent direction never has a sharp kink - that continuous tangent is
// what lets the plane's heading "bank" naturally into every turn instead
// of snapping between straight legs.
const PATH_D = "M15 20 C35 0, 60 0, 78 15 S100 45, 82 62 S55 95, 35 82 S0 55, 15 20 Z";

const LOOP_DURATION_MS = 24000;
const ICON_HEADING_OFFSET = 45; // SendFill's glyph points up-right at rest; align it to the travel vector

// The trail is a single line traced from (progress - TRAIL_SPAN) up to
// progress itself - i.e. its leading endpoint IS the plane's own position,
// so it's attached by construction rather than by tuning a gap distance.
// (An earlier version used discrete dots offset behind the plane, but the
// glyph's drawn ink sits well inside its bounding box, so the "gap" to the
// box center shifted with heading and never looked reliably connected.)
const TRAIL_SPAN = 11;
const TRAIL_SEGMENTS = 14;

export const PaperPlane = () => {
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const iconRef = useRef(null);
  const trailPathRef = useRef(null);
  const trailGradientRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pathEl = pathRef.current;
    const length = pathEl.getTotalLength();
    let startTime = null;
    let rafId = null;

    const toPx = (pt) => ({
      x: (pt.x / 100) * window.innerWidth,
      y: (pt.y / 100) * window.innerHeight,
    });

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = (timestamp - startTime) % LOOP_DURATION_MS;
      const progress = (elapsed / LOOP_DURATION_MS) * length;

      const pt = pathEl.getPointAtLength(progress);
      const lookahead = pathEl.getPointAtLength((progress + 1.5) % length);
      const heading = Math.atan2(lookahead.y - pt.y, lookahead.x - pt.x) * (180 / Math.PI);
      const head = toPx(pt);

      if (planeRef.current) {
        planeRef.current.style.transform = `translate(${head.x}px, ${head.y}px)`;
      }
      if (iconRef.current) {
        const flutter = Math.sin(timestamp / 220) * 4;
        // translate(-50%,-50%) centers the glyph on the computed point;
        // the rotate has to be chained in the same string since setting
        // style.transform replaces the whole value, not just one function.
        iconRef.current.style.transform = `translate(-50%, -50%) rotate(${heading + ICON_HEADING_OFFSET + flutter}deg)`;
      }

      if (trailPathRef.current) {
        let d = "";
        let tail = head;
        for (let i = 0; i <= TRAIL_SEGMENTS; i++) {
          const behind = (i / TRAIL_SEGMENTS) * TRAIL_SPAN;
          const segProgress = (progress - behind + length) % length;
          const segPt = toPx(pathEl.getPointAtLength(segProgress));
          d += i === 0 ? `M${segPt.x},${segPt.y}` : ` L${segPt.x},${segPt.y}`;
          if (i === TRAIL_SEGMENTS) tail = segPt;
        }
        trailPathRef.current.setAttribute("d", d);
        if (trailGradientRef.current) {
          trailGradientRef.current.setAttribute("x1", tail.x);
          trailGradientRef.current.setAttribute("y1", tail.y);
          trailGradientRef.current.setAttribute("x2", head.x);
          trailGradientRef.current.setAttribute("y2", head.y);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <path ref={pathRef} d={PATH_D} />
      </svg>
      <svg className="paper-plane-trail-svg" aria-hidden="true">
        <defs>
          <linearGradient ref={trailGradientRef} id="paper-plane-trail-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--ink)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--ink)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path ref={trailPathRef} className="paper-plane-trail-path" />
      </svg>
      <div className="paper-plane-wrap" ref={planeRef} aria-hidden="true">
        <div className="paper-plane-icon" ref={iconRef}>
          <SendFill size={24} />
        </div>
      </div>
    </>
  );
};
