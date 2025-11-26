import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const TechStack = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="tech-stack" id="TechStack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tech-stack-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>
                I specialize in a comprehensive suite of technologies to build robust and scalable web applications.
                <br />
                From front-end interactivity to back-end logic, here are the tools I use to bring ideas to life.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme tech-stack-slider"
              >
                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Firebase" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Paymongo" />
                  <h5>Paymongo</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};