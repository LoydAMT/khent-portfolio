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
const ICON_SIZE = 36;

// 3D banking: instead of a flat glyph that only spins in-plane, the plane
// pitches (rotateX) with how steeply it's climbing/diving and rolls
// (rotateY) with how hard the upcoming curve turns - so it reads as a
// solid object changing perspective as it flies, not a sticker rotating
// on a 2D disc. Both are looked up a little ahead of the current point
// (curvature-based, not frame-to-frame) so they're independent of frame
// rate, then eased toward with LERP so they settle smoothly instead of
// jittering step to step.
const CURVE_LOOKAHEAD = 6;
const MAX_PITCH = 32;
const MAX_BANK = 38;
const BANK_SENSITIVITY = 1.7;
const LERP = 0.08;

const normalizeAngleDelta = (delta) => {
  let d = delta % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
};

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
  const pitchRef = useRef(0);
  const bankRef = useRef(0);

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
      const dx = lookahead.x - pt.x;
      const dy = lookahead.y - pt.y;
      const heading = Math.atan2(dy, dx) * (180 / Math.PI);
      const head = toPx(pt);

      if (planeRef.current) {
        planeRef.current.style.transform = `translate(${head.x}px, ${head.y}px)`;
      }
      if (iconRef.current) {
        const flutter = Math.sin(timestamp / 220) * 4;

        // Pitch: how steeply the current leg climbs/dives (vertical share
        // of the travel vector) - nose tips up while climbing, down while
        // diving.
        const dist = Math.hypot(dx, dy) || 1;
        const pitchTarget = (-dy / dist) * MAX_PITCH;

        // Bank: how hard the curve ahead turns, i.e. the heading change
        // between here and a bit further down the path - independent of
        // frame rate since both points come from arc-length lookups, not
        // the previous animation frame.
        const curvePt = pathEl.getPointAtLength((progress + CURVE_LOOKAHEAD) % length);
        const curveLookahead = pathEl.getPointAtLength((progress + CURVE_LOOKAHEAD + 1.5) % length);
        const curveHeading = Math.atan2(curveLookahead.y - curvePt.y, curveLookahead.x - curvePt.x) * (180 / Math.PI);
        const bankTarget = Math.max(
          -MAX_BANK,
          Math.min(MAX_BANK, normalizeAngleDelta(curveHeading - heading) * BANK_SENSITIVITY)
        );

        pitchRef.current += (pitchTarget - pitchRef.current) * LERP;
        bankRef.current += (bankTarget - bankRef.current) * LERP;

        // translate(-50%,-50%) centers the glyph on the computed point;
        // everything has to be chained in one string since setting
        // style.transform replaces the whole value, not just one function.
        iconRef.current.style.transform =
          `translate(-50%, -50%) ` +
          `perspective(420px) rotateX(${pitchRef.current}deg) rotateY(${bankRef.current}deg) ` +
          `rotate(${heading + ICON_HEADING_OFFSET + flutter}deg)`;
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
          <SendFill size={ICON_SIZE} />
        </div>
      </div>
    </>
  );
};
