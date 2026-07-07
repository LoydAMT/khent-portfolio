import { CodeSlash, HddNetwork, CloudFill, Cpu, Database, Git } from "react-bootstrap-icons";
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

const skillCategories = [
  {
    icon: CodeSlash,
    title: "Front-End Development",
    blurb: "Dynamic, responsive interfaces built with modern component-driven frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    icon: HddNetwork,
    title: "Back-End Development",
    blurb: "Secure, well-structured server-side applications and APIs.",
    tags: ["Django", ".NET", "Node.js", "Python"],
  },
  {
    icon: CloudFill,
    title: "Cloud & Serverless",
    blurb: "High-availability, HIPAA-compliant serverless backends on AWS.",
    tags: ["AWS CDK", "DynamoDB", "Cognito"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    blurb: "Hardware-integrated robotics and computer-vision projects.",
    tags: ["Raspberry Pi 5", "C", "C++", "YOLOv8"],
  },
  {
    icon: Database,
    title: "Database Management",
    blurb: "Structured and NoSQL data storage, modeling, and retrieval.",
    tags: ["SQL", "Firebase", "Supabase", "MS Access"],
  },
  {
    icon: Git,
    title: "Developer Tools",
    blurb: "Source control and an AI-assisted development workflow.",
    tags: ["Git", "GitHub", "VS Code", "Visual Studio 2022", "Gemini", "Claude Code"],
  },
];

// Every tool from the categories above, flattened into one strip - no tool is listed twice
// across the section anymore (see the removed standalone Tech Stack section).
const techStrip = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "C", Icon: SiC, color: "#5C6BC0" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#A22846" },
  { name: "Claude Code", Icon: SiClaudecode, color: "#D97757" },
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
  <div className="strip-item">
    <div
      className="strip-icon-tile"
      style={{ backgroundColor: hexToRgba(color, 0.1), border: `1px solid ${hexToRgba(color, 0.25)}` }}
      title={name}
    >
      <Icon color={color} size={22} />
    </div>
  </div>
);

export const Skills = () => {
    return (
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`skill-bx ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <h2>Skills</h2>
                    <p>A snapshot of the languages, frameworks, and platforms I reach for most, organized by where they sit in the stack.</p>
                    <div className="skills-grid">
                      {skillCategories.map(({ icon: Icon, title, blurb, tags }) => (
                        <div className="skill-item" key={title}>
                          <div className="skill-item-icon">
                            <Icon size={24} />
                          </div>
                          <h5>{title}</h5>
                          <p>{blurb}</p>
                          <div className="skill-tags">
                            {tags.map((tag) => (
                              <span className="skill-tag" key={tag}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="skills-strip">
                      <div className="skills-strip-track">
                        {[...techStrip, ...techStrip].map((tech, i) => (
                          <TechTile key={`${tech.name}-${i}`} {...tech} />
                        ))}
                      </div>
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
