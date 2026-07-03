import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiPython,
  SiDotnet,
  SiHtml5,
  SiCplusplus,
  SiC,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiRaspberrypi,
  SiClaudecode,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa6";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const rows = [
  {
    direction: "left",
    duration: 26,
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Django", Icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    direction: "right",
    duration: 30,
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "C", Icon: SiC, color: "#5C6BC0" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    direction: "left",
    duration: 24,
    items: [
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#A22846" },
      { name: "Claude Code", Icon: SiClaudecode, color: "#D97757" },
    ],
  },
];

const hexToRgba = (hex, alpha) => {
  const value = hex.replace("#", "");
  const bigint = parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const TechTile = ({ name, Icon, color }) => (
  <div className="item">
    <div
      className="tech-icon-tile"
      style={{ backgroundColor: hexToRgba(color, 0.1), border: `1px solid ${hexToRgba(color, 0.25)}` }}
    >
      <Icon color={color} size={34} />
    </div>
    <h5>{name}</h5>
  </div>
);

export const TechStack = () => {
  return (
    <section className="tech-stack" id="TechStack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`tech-stack-bx ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2>Tech Stack</h2>
                  <p>
                    I specialize in a comprehensive suite of technologies to build robust and scalable web applications.
                    <br />
                    From front-end interactivity to back-end logic, here are the tools I use to bring ideas to life.
                  </p>
                  <div className="tech-marquee">
                    {rows.map((row, rowIndex) => (
                      <div className={`tech-marquee-row direction-${row.direction}`} key={rowIndex}>
                        <div
                          className="tech-marquee-track"
                          style={{ animationDuration: `${row.duration}s` }}
                        >
                          {[...row.items, ...row.items].map((tech, i) => (
                            <TechTile key={`${tech.name}-${i}`} {...tech} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
