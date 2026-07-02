import { Col } from "react-bootstrap";
import { Cpu } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, url, icon: Icon = Cpu }) => {
  const card = (
    <div className={`proj-imgbx ${!imgUrl ? "no-image" : ""}`}>
      {imgUrl ? (
        <img src={imgUrl} alt={title} />
      ) : (
        <Icon className="proj-fallback-icon" size={54} />
      )}
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          {card}
        </a>
      ) : (
        card
      )}
    </Col>
  );
};
