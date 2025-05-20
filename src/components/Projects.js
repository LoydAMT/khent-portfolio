import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";  // You can update these with actual images
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Gourmet Gamble",
      description: "Recipe Sharing App",
      imgUrl: projImg1,
      url: "https://gourmetgamble0.vercel.app/", // Your link
    },
    {
      title: "Sagpip Pilipinas - SGP",
      description: "Disaster Response",
      imgUrl: projImg2,
      url: "https://sagip-pilipinas.vercel.app/", // Your link
    },
    {
      title: "SwiftSail Ferries",
      description: "Ferry Ticketing System",
      imgUrl: projImg2,
      url: "https://swiftsail-ferries.vercel.app/", // Your link
    },
    {
      title: "Quiz App V by KLC",
      description: "Quiz Application",
      imgUrl: projImg3,
      url: "https://quizappfor-v-by-klc.vercel.app/", // Your link
    },
    {
      title: "Weather by KLC",
      description: "Weather Application",
      imgUrl: projImg1,
      url: "https://weatherby-klc.vercel.app/", // Your link
    },
    {
      title: "Shared Docs by KLC",
      description: "Document Sharing App",
      imgUrl: projImg2,
      url: "https://shareddocs-klc.vercel.app/", // Your link
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Projects</h2>
                  <p>Explore a selection of my projects, ranging from web applications like recipe sharing and ferry ticketing systems to quiz apps and weather forecasting tools. Each project showcases my passion for creating practical solutions that enhance user experiences across different domains.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(3).map((project, index) => (
                            <ProjectCard key={index + 3} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned! More exciting projects are coming soon. I'm currently working on new ideas and can't wait to share them with you!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
