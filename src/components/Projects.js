import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Robot, PatchQuestion, FileEarmarkText } from "react-bootstrap-icons";
import sagipImg from "../assets/img/project-sagip.jpg";
import swiftSailImg from "../assets/img/project-swiftsail.jpg";
import gourmetImg from "../assets/img/project-gourmet.jpg";
import weatherImg from "../assets/img/project-weather.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const featured = [
    {
      title: "TIDE-Y",
      description: "Raspberry Pi 5 · YOLOv8 · 6DOF Robotic Arm",
      icon: Robot,
    },
    {
      title: "Sagip Pilipinas",
      description: "Next.js · TypeScript · Tailwind CSS",
      imgUrl: sagipImg,
      url: "https://sagip-pilipinas.vercel.app/",
    },
    {
      title: "Swift Sail",
      description: "React.js · JavaScript · Lead Developer",
      imgUrl: swiftSailImg,
      url: "https://swiftsail-ferries.vercel.app/",
    },
  ];

  const miniProjects = [
    {
      title: "Gourmet Gamble",
      description: "Recipe Sharing App",
      imgUrl: gourmetImg,
      url: "https://gourmetgamble0.vercel.app/",
    },
    {
      title: "Quiz App V by KLC",
      description: "Quiz Application",
      icon: PatchQuestion,
      url: "https://quizappfor-v-by-klc.vercel.app/",
    },
    {
      title: "Weather by KLC",
      description: "Weather Application",
      imgUrl: weatherImg,
      url: "https://weatherby-klc.vercel.app/",
    },
    {
      title: "Shared Docs by KLC",
      description: "Document Sharing App",
      icon: FileEarmarkText,
      url: "https://shareddocs-klc.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore a selection of my projects, from an autonomous beach-cleaning robot and a disaster response platform to a ferry ticketing system and other web apps. Each project showcases my passion for creating practical solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Featured Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mini Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {featured.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {miniProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
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
