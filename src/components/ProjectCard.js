import { Col } from "react-bootstrap";
import { Cpu, BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, url, icon: Icon = Cpu, placeholderLabel }) => {
  const card = (
    <div className="project-card">
      <div className={`project-card-media ${!imgUrl ? "no-image" : ""}`}>
        {imgUrl ? (
          <img src={imgUrl} alt={`${title} preview`} loading="lazy" />
        ) : (
          <div className="project-card-placeholder">
            <Icon size={40} />
            <span>{placeholderLabel || "Preview coming soon"}</span>
          </div>
        )}
      </div>
      <div className="project-card-body">
        <h4>{title}</h4>
        <p>{description}</p>
        {url && (
          <span className="project-card-link">
            View Live <BoxArrowUpRight size={13} />
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4} className="project-card-col">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card-anchor">
          {card}
        </a>
      ) : (
        card
      )}
    </Col>
  );
};
