import { Container, Row, Col } from "react-bootstrap";
import { BriefcaseFill, MortarboardFill } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experience = [
    {
      role: "Automations Engineer & Web Developer — InstruByte",
      period: "2025 – Present",
      points: [
        "Designed, developed, and deployed the company's official website (instrubyte.com.ph), showcasing electrical, instrumentation, and automation engineering services with an integrated quotation request system serving clients across the Philippines.",
        "Support industrial automation projects involving PLC, SCADA, HMI, and VFD systems, as well as industrial communication networks (Profinet, Modbus, Ethernet/IP) for process monitoring and control.",
        "Contribute to system integration and digital solutions initiatives, including IT–OT integration and IoT-based monitoring concepts for data-driven plant operations.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      period: "October 2025 – May 2026",
      points: [
        "Architected and developed a comprehensive Electronic Health Record (EHR) System using Python Django, focusing on secure management of patient records, medical histories, and clinical visit data.",
        "Used AWS CDK to build a serverless backend, utilizing DynamoDB for high-availability data storage and Cognito for HIPAA-compliant user authentication.",
        "Implemented complex data structures for managing diagnosis gaps, medication lists, and vaccine records, ensuring high data integrity and searchability.",
      ],
    },
    {
      role: "OJT Intern — ResponsiveCode",
      period: "June 2025 – August 2025",
      points: [
        "Co-developed a mobile application designed for automated, real-time attendance tracking leveraging facial recognition technology.",
        "Integrated biometric facial verification features to ensure secure user identity authentication and seamless daily data logging.",
      ],
    },
    {
      role: "Virtual Assistant — ELAN LLC",
      period: "November 2024 – December 2025",
      points: [
        "Managed and curated content for various social media platforms, maintaining a consistent brand voice and increasing overall audience engagement.",
        "Monitored and analyzed KPIs such as reach, engagement rate, and click-through rates to identify high-performing content trends.",
        "Generated weekly performance reports to provide actionable recommendations for digital marketing improvements.",
      ],
    },
  ];

  const education = {
    school: "Cebu Institute of Technology – University",
    degree: "B.S. Computer Engineering — Cum Laude",
    period: "May 2026",
    location: "Cebu City, Cebu",
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p className="section-lead">
                    A track record of shipping secure, real-world software and industrial automation
                    solutions - from HIPAA-compliant health records systems to plant-floor system integration.
                  </p>
                  <h3 className="timeline-group-label">Experience</h3>
                  <div className="timeline">
                    {experience.map((item, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-icon" style={{ '--pop-delay': `${index * 90}ms` }}>
                          <BriefcaseFill size={20} />
                        </div>
                        <div className="timeline-content">
                          <span className="timeline-period">{item.period}</span>
                          <h4>{item.role}</h4>
                          <ul>
                            {item.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="timeline-group-label">Education</h3>
                  <div className="timeline timeline-education">
                    <div className="timeline-item">
                      <div className="timeline-icon timeline-icon-education">
                        <MortarboardFill size={20} />
                      </div>
                      <div className="timeline-content">
                        <span className="timeline-period">{education.period}</span>
                        <h4>{education.degree}</h4>
                        <p className="timeline-subtext">{education.school} · {education.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
