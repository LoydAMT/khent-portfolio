import { Container, Row, Col } from "react-bootstrap";
import { AwardFill, BoxArrowUpRight } from "react-bootstrap-icons";
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
  },
  {
    title: "ICpEP R7 Regional Convention — Advancement in AI",
    issuer: "Institute of Computer Engineers of the Philippines, Region 7",
    date: "April 2026",
    file: icpepCert,
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM · Cognitive Class (DB0101EN)",
    date: "May 2026",
    file: sqlCert,
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM · Cognitive Class (PY0101EN)",
    date: "May 2026",
    file: pythonCert,
  },
  {
    title: "Data Science 101",
    issuer: "IBM · Cognitive Class (DS0101EN)",
    date: "May 2026",
    file: dataScienceCert,
  },
  {
    title: "Big Data 101",
    issuer: "IBM · Cognitive Class (BD0101EN)",
    date: "May 2026",
    file: bigDataCert,
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM · Cognitive Class (CO0101EN)",
    date: "May 2026",
    file: dockerCert,
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "IBM · Cognitive Class (AI0117EN)",
    date: "March 2026",
    file: promptEngCert,
  },
  {
    title: "Career Forward: Equipping Students for Employment Success",
    issuer: "CIT-U Guidance Center",
    date: "March 2026",
    file: careerForwardCert,
  },
  {
    title: "Psychological Preparedness: Upholding Work Ethics & Board Exam Readiness",
    issuer: "CIT-U Guidance Center",
    date: "April 2026",
    file: psychPreparednessCert,
  },
];

export const Certifications = () => {
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
                    {certifications.map((cert) => (
                      <a
                        className="cert-card"
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={cert.title}
                      >
                        <div className="cert-card-icon">
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
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
