import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const rotationDuration = 2000; // Duration for each rotation in milliseconds

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
                  <span className="tagline">Welcome to my Portfolio</span>
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
                    I am Khent, a passionate Web Developer with a keen interest in crafting user-friendly designs and innovative solutions to solve real-world problems. Welcome to my portfolio!
                  </p>
                  <button onClick={handleGmailConnect}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};