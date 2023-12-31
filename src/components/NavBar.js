/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
//import navIcon2 from "../assets/img/nav-icon2.svg";
//import navIcon3 from "../assets/img/nav-icon3.svg";
//import { HashLink } from "react-router-hash-link";
//import { BrowserRouter as Router } from "react-router-dom";
import RetroHitCounter from "react-retro-hit-counter";

//import useSWR from "swr";

// async function fetcher(...args) {
//   const res = await fetch(...args)
//   return res.json()
// }

// export default function ViewCounter({ slug, blogPage = false }) {
//   const { data } = useSWR(`/api/views/${slug}`, fetcher)
//   const views = new Number(data?.total)

//   useEffect(() => {
//     const registerView = () =>
//       fetch(`/api/views/${slug}`, {
//         method: 'POST',
//       })

//     if (blogPage) {
//       registerView()
//     }
//   }, [slug])

//   return `${views > 0 ? views.toLocaleString() : '–––'} views`
// }

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //const [counter, setCounter] = useState(0);

  const [visits, setVisits] = useState(0);

  // Loading from localStorage
  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("RetroHitCounter")) || 0;
    setVisits(storedVisits + 1);

    // Saving in localStorage
  }, []);
  useEffect(() => {
    localStorage.setItem("RetroHitCounter", visits);
  }, [visits]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand onClick={() => setCounter(counter + 1)}> */}
        <Navbar.Brand>
          {/* visitors counter  */}
          {/* {counter > 9 && (
            <p style={{ color: "white" }}>You like clicking...</p>
          )} */}
          <RetroHitCounter
            blogPage={true}
            hits={visits} // add slug here when swr is rdy for use
            withBorder={true}
            withGlow={true}
            minLength={4}
            size={20}
            padding={4}
            digitSpacing={3}
            segmentThickness={4}
            segmentSpacing={0.5}
            segmentActiveColor="white"
            segmentInactiveColor="grey"
            backgroundColor="#222222"
            borderThickness={3}
            glowStrength={0.3}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                activeLink === "education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#workExperience"
              className={
                activeLink === "workExperience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("workExperience")}
            >
              Work Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#languages"
              className={
                activeLink === "languages"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("languages")}
            >
              Languages
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="blank"
                href="https://www.linkedin.com/in/veikko-ruopio-a05189192"
              >
                <img src={navIcon1} alt="" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a> */}
            </div>
            {/* <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
