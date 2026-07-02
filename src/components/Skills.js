import { CodeSlash, HddNetwork, CloudFill, Cpu, Database, Git } from "react-bootstrap-icons";
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
                    <p>Hi, I'm Khent, a Computer Engineer building secure, scalable applications with a strong technical grasp of embedded systems and networking.<br />Below are some of my core skills:</p>
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
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </section>
    );
  };
