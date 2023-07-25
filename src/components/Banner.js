import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ProfilePic from "../assets/img/ProfilePic.jpg";
//import headerImg from "../assets/img/header-img.svg"; // orginal img
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Game Developer", "Front-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;

    let fullText = toRotate[i];

    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my CV</span>
                  <h1 style={{ height: 100 }}>
                    {"Hi I´m Veikko Ruopio "}
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>
                  <br />
                  <p style={{ paddingTop: 200 }}>
                    Hardworking, reliable guy. Learning new things and solving
                    problems comes naturally to me, and I'm not afraid of
                    challenges or busy schedules. I also have a strong desire to
                    develop myself further as a person and as an employee. I
                    also have good skills to work independently and responsibly.
                    If I promise something it will happen on time. 5 months
                    intense experience in NetMaa Ltd. Recruitment training,
                    where I learned modern web programming technologies. Strong
                    operations professional graduated from Liberal Adult
                    Education Game Technology of Ahlman Institute. One year of
                    experience in game design and programming.
                  </p>
                  <h5>
                    <a
                      style={{ color: "white" }}
                      href="mailto: veikko1983@gmail.com"
                    >
                      Send email
                    </a>
                  </h5>
                  <ArrowRightCircle size={25} />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <br />
            <img
              style={{ width: 400, height: 400 }}
              src={ProfilePic}
              alt="Header Img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
