import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/RED_2x2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const skills = ["Computer Engineer", "Full Stack Developer", "Embedded Systems Builder"];
const rotationDuration = 2000; // Duration for each rotation in milliseconds

export const Banner = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, rotationDuration);

    return () => clearInterval(interval);
  }, []);

  const handleGmailConnect = () => {
    // Open Gmail with a pre-filled message
    const mailtoLink = "mailto:khentlloyd3@gmail.com?subject=Let’s Connect&body=Hi Khent,";
    window.location.href = mailtoLink;
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Cebu City, PH · Cum Laude, B.S. Computer Engineering</span>
                  <h1>
                    Hi! I'm Khent{" "}
                    <div className="cube-container">
                      <div
                        className="cube"
                        style={{
                          transform: `rotateX(${-currentSkillIndex * 90}deg)`,
                          transition: "transform 1s",
                        }}
                      >
                        {skills.map((skill, index) => (
                          <div
                            key={index}
                            className={`cube-face ${index === currentSkillIndex ? "active" : ""}`}
                            style={{ transform: `rotateX(${index * 90}deg) translateZ(50px)` }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </h1>
                  <p>
                    Cum Laude Computer Engineering graduate from Cebu Institute of Technology - University, based in Cebu City. I build secure, scalable applications with JavaScript, React, and Next.js, and pair that with a strong technical grasp of embedded systems and networking - from serverless AWS backends to autonomous robotics. I'm committed to solving real-world problems through clean, innovative code.
                  </p>
                  <div className="banner-cta">
                    <button className="banner-primary-btn" onClick={handleGmailConnect}>
                      Let’s Connect <ArrowRightCircle size={22} />
                    </button>
                    <a href="#experience" className="banner-secondary-btn">
                      View Experience
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="hero-photo">
              <div className="hero-photo-backdrop" aria-hidden="true"></div>
              {/* TODO(Khent): swap headerImg for a background-removed PNG/WebP cutout of this photo for a cleaner look */}
              <div className="hero-photo-frame">
                <img
                  src={headerImg}
                  alt="Khent Lloyd Cases smiling in graduation regalia, Cum Laude Computer Engineering graduate"
                  width={480}
                  height={480}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};