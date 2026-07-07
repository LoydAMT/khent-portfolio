import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

// Keep this in sync with --nav-height in App.css - used to offset the
// IntersectionObserver so a section counts as "active" once it clears the sticky header.
const NAV_HEIGHT = 90;
const SECTION_IDS = ['home', 'skills', 'experience', 'certifications', 'projects'];

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Scroll-spy: watch a thin "activation band" just below the sticky header
  // rather than comparing raw intersection ratios - ratios aren't comparable
  // across sections of very different heights (a short section can hit a
  // high ratio while a tall one is still mostly visible), which let the
  // wrong link win. When more than one section straddles the band, prefer
  // whichever is furthest down the page, since that's the one the user
  // actually scrolled into.
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const visibleIds = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        const active = SECTION_IDS.filter((id) => visibleIds.has(id)).pop();
        if (active) {
          setActiveLink(active);
        }
      },
      {
        threshold: 0,
        rootMargin: `-${NAV_HEIGHT}px 0px -70% 0px`,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleGmailConnect = () => {
    // Open Gmail with a pre-filled message
    const mailtoLink = `mailto:khentlloyd3@gmail.com?subject=Let’s Connect&body=Hi Khent,`;
    window.location.href = mailtoLink;
  }

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Khent Lloyd Cases logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#certifications" className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certifications')}>Certifications</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/khent-lloyd-cases-b73586253/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/khentl.ac" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/khentlloyddx/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <button className="vvd" onClick={handleGmailConnect}>
                <span>Let’s Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
