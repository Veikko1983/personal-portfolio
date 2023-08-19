import csharp from "../assets/img/csharp.png";
import javascript from "../assets/img/javascript.png";
import dart from "../assets/img/Dart.jpg";
import react from "../assets/img/react.jpg";
import nextjs from "../assets/img/nextjs.png";
import css from "../assets/img/Css.jpg";
import html5 from "../assets/img/Html5.png";
import mui from "../assets/img/mui.jpeg";
import bootstrap from "../assets/img/bootstrap.png";
import azuredevops from "../assets/img/azuredevops.png";
import sourcetree from "../assets/img/sourcetree.jpg";
import nodejs from "../assets/img/nodejs.png";
import github from "../assets/img/github.png";
import unity from "../assets/img/unity.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
//import nightForrest1 from "../assets/img/nightForrest1.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  const imageSize = { width: 140, height: 120 };

  function changeBackground(e) {
    e.target.style.width = "160px";
    e.target.style.height = "140px";
    e.target.style.cursor = "pointer";
  }
  function changeBackgroundToNormal(e) {
    e.target.style.width = "140px";
    e.target.style.height = "120px";
  }
  // FUNCTIONS TO WIKIPAGES //
  function cSharpWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location =
      "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)";
  }
  function javascriptWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://fi.wikipedia.org/wiki/JavaScript";
  }
  function dartWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location =
      "https://en.wikipedia.org/wiki/Dart_(programming_language)";
  }
  function reactWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/React_(software)";
  }
  function nextJsWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/Next.js";
  }
  function cssWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/CSS";
  }
  function htmlWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/HTML";
  }
  function muiWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://mui.com/";
  }
  function bootstrapWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location =
      "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)";
  }
  function azureDevOpsWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/Azure_DevOps_Server";
  }
  function sourceTreeWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://www.sourcetreeapp.com/";
  }
  function nodeJsWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/Node.js";
  }
  function gitHubWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/GitHub";
  }
  function unityWiki(e) {
    e.preventDefault();
    window.open("https://veikko1983.github.io/personal-portfolio/");
    window.location = "https://en.wikipedia.org/wiki/Unity_(game_engine)";
  }
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Trainee/Junior Skilled In</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    onClick={cSharpWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={csharp}
                    alt="Image"
                  />

                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img
                    onClick={javascriptWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={javascript}
                    alt="Image"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    onClick={dartWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={dart}
                    alt="Image"
                  />
                  <h5>Dart</h5>
                </div>
                <div className="item">
                  <img
                    onClick={reactWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={react}
                    alt="Image"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    onClick={nextJsWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={nextjs}
                    alt="Image"
                  />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img
                    onClick={cssWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={css}
                    alt="Image"
                  />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img
                    onClick={htmlWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={html5}
                    alt="Image"
                  />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img
                    onClick={muiWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={mui}
                    alt="Image"
                  />
                  <h5>MUI React Component Library</h5>
                </div>
                <div className="item">
                  <img
                    onClick={bootstrapWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={bootstrap}
                    alt="Image"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    onClick={azureDevOpsWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={azuredevops}
                    alt="Image"
                  />
                  <h5>AzureDevOps</h5>
                </div>
                <div className="item">
                  <img
                    onClick={sourceTreeWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={sourcetree}
                    alt="Image"
                  />
                  <h5>SourceTree</h5>
                </div>
                <div className="item">
                  <img
                    onClick={nodeJsWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={nodejs}
                    alt="Image"
                  />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img
                    onClick={gitHubWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={github}
                    alt="Image"
                  />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img
                    onClick={unityWiki}
                    onMouseOver={changeBackground}
                    onMouseOut={changeBackgroundToNormal}
                    style={imageSize}
                    src={unity}
                    alt="Image"
                  />
                  <h5>UNITY</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={nightForrest1} /> */}
    </section>
  );
};
