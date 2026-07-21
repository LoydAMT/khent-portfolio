import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AwardFill, BoxArrowUpRight, StarFill } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import awsCert from "../assets/certs/awscert.pdf";
import icpepCert from "../assets/certs/icpep.pdf";
import careerForwardCert from "../assets/certs/Career Forward cert.pdf";
import psychPreparednessCert from "../assets/certs/Psychological Preparedness cert.pdf";
import bigDataCert from "../assets/certs/BIGDATACert.pdf";
import dockerCert from "../assets/certs/docker essentials.pdf";
import dataScienceCert from "../assets/certs/data science101.pdf";
import sqlCert from "../assets/certs/IBM Skills Network DB0101EN Certificate _ Cognitive Class.pdf";
import promptEngCert from "../assets/certs/IBMSkillsNetwork AI0117EN Certificate _ Cognitive Class.pdf";
import pythonCert from "../assets/certs/IBM PY0101EN Certificate _ Cognitive Class.pdf";

const certifications = [
  {
    title: "AWS Odyssey: Serverless Website Hosting with S3 & Lambda",
    issuer: "AWS Cloud Club CIT-U x WildQuacc",
    date: "February 2026",
    file: awsCert,
    featured: true,
  },
  {
    title: "ICpEP R7 Regional Convention — Advancement in AI",
    issuer: "Institute of Computer Engineers of the Philippines, Region 7",
    date: "April 2026",
    file: icpepCert,
    featured: true,
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM · Cognitive Class (DB0101EN)",
    date: "May 2026",
    file: sqlCert,
    featured: false,
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM · Cognitive Class (PY0101EN)",
    date: "May 2026",
    file: pythonCert,
    featured: false,
  },
  {
    title: "Data Science 101",
    issuer: "IBM · Cognitive Class (DS0101EN)",
    date: "May 2026",
    file: dataScienceCert,
    featured: false,
  },
  {
    title: "Big Data 101",
    issuer: "IBM · Cognitive Class (BD0101EN)",
    date: "May 2026",
    file: bigDataCert,
    featured: false,
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM · Cognitive Class (CO0101EN)",
    date: "May 2026",
    file: dockerCert,
    featured: false,
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "IBM · Cognitive Class (AI0117EN)",
    date: "March 2026",
    file: promptEngCert,
    featured: false,
  },
  {
    title: "Career Forward: Equipping Students for Employment Success",
    issuer: "CIT-U Guidance Center",
    date: "March 2026",
    file: careerForwardCert,
    featured: false,
  },
  {
    title: "Psychological Preparedness: Upholding Work Ethics & Board Exam Readiness",
    issuer: "CIT-U Guidance Center",
    date: "April 2026",
    file: psychPreparednessCert,
    featured: false,
  },
];

const DEFAULT_VISIBLE_COUNT = 6;

export const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, DEFAULT_VISIBLE_COUNT);
  const hiddenCount = certifications.length - DEFAULT_VISIBLE_COUNT;

  return (
    <section className="certifications" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certifications</h2>
                  <p className="section-lead">
                    Continuous learning across cloud, data, and professional development.
                  </p>
                  <div className="certs-grid">
                    {visibleCerts.map((cert, index) => (
                      <a
                        className={`cert-card ${cert.featured ? "featured" : ""}`}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={cert.title}
                      >
                        {cert.featured && (
                          <span className="cert-featured-badge">
                            <StarFill size={10} /> Featured
                          </span>
                        )}
                        <div className="cert-card-icon" style={{ '--pop-delay': `${(index % DEFAULT_VISIBLE_COUNT) * 60}ms` }}>
                          <AwardFill size={20} />
                        </div>
                        <div className="cert-card-body">
                          <h5>{cert.title}</h5>
                          <span className="cert-issuer">{cert.issuer}</span>
                          <span className="cert-date">{cert.date}</span>
                        </div>
                        <BoxArrowUpRight className="cert-card-link-icon" size={16} />
                      </a>
                    ))}
                  </div>
                  {hiddenCount > 0 && (
                    <button
                      type="button"
                      className="certs-toggle"
                      onClick={() => setShowAll((prev) => !prev)}
                      aria-expanded={showAll}
                    >
                      {showAll ? "Show fewer certifications" : `Show all certifications (${certifications.length})`}
                    </button>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
