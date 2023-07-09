import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1XxxCalculator from "../assets/img/XxxCalculator.png"; // XxxCalculator2020
import projImg2SteelAndBone from "../assets/img/SteelAndBone.jpg"; // Steal & Bone
import projImg3threeGamesInOne from "../assets/img/threeGamesInOne.jpg"; // Ahlman Mansion 2020
//import colorSharp2 from "../assets/img/color-sharp2.png"; // remember to change this to other color, color of your choice.
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "XXXCalculator2020",
      description:
        "This was my solo hobby project. Using Visual Studio 2019, C# and Fl Studio. This game should not be played with a serious face. The game includes three different game modes and a secret game. Normal mode, a.k.a training mode. Guess mode and classic memory game.",
      imgUrl: projImg1XxxCalculator,
      url: "https://bazzokoira.itch.io/xxxcalculator2020-full-game",
    },
    {
      title: "Steel & Bone",
      description:
        "Steel & Bone is made by first-year game development students and was made over a about 3 month period. It was made by six programmers and three graphic designers. It`s a Action Dungeon Crawling Adventure Role-Playing Game with little puzzle mechanics.",

      imgUrl: projImg2SteelAndBone,
      url: "https://store.steampowered.com/app/1252030/Steel__Bone",
    },
    {
      title:
        "Ahlman Mansion 2020 games(Delta Nova, Lost Boy & Outer World Attackers)",
      description: "3 games in Alhman Mansion 2020 game",
      imgUrl: projImg3threeGamesInOne,
      url: "https://store.steampowered.com/app/1252020/Ahlman_Mansion_2020",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Game & Music</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="null">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Games</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Music Production</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <div>
                            <h5>
                              <a
                                target="blank"
                                style={{ color: "white" }}
                                href="https://www.youtube.com/channel/UCmb2Wrl6jSZJsWrf3cYyGhA"
                              >
                                YouTube Url
                              </a>
                            </h5>
                          </div>
                        </p>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
