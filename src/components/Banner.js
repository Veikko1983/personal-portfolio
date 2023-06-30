import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ProfilePic from "../assets/img/ProfilePic.jpg";
//import headerImg from "../assets/img/header-img.svg"; // orginal img
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  //const [theTextLoopNum, setTheTextLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //const [theTextIsDeleting, setTheTextIsDeleting] = useState(false);
  const toRotate = ["Game Developer", "Front-End Developer"];
  // const theTextRotator = [
  //   "Hardworking, reliable guy. Learning new things and solving problems comes naturally to me, and I'm not afraid of challenges or busy schedules. I also have a strong desire to develop myself further as a person and as an employee. I also have good skills to work independently and responsibly. If I promise something it will happen on time. 5 months intense experience in NetMaa Ltd. Recruitment training, where I learned modern web programming technologies. Strong operations professional graduated from Liberal Adult Education Game Technology of Ahlman Institute. One year of experience in game design and programming.",
  // ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 1000; // new period for theText
  //const [theText, setTheText] = useState("");
  //const [theTextDelta, setTheTextDelta] = useState(1000);
  //const theTextPeriod = 2000;

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
  // useEffect(() => {
  //   let theTextTicker = setInterval(() => {
  //     tickers();
  //   }, theTextDelta);
  //   return () => {
  //     clearInterval(theTextTicker);
  //   };
  // }, [theText]);

  // const tickers = () => {
  //   let e = theTextLoopNum % theTextRotator.length;

  //   let theTextFullText = theTextRotator[e];

  //   let theTextUpdateText = theTextIsDeleting
  //     ? theTextFullText.substring(0, text.length - 1)
  //     : theTextFullText.substring(0, text.length + 1000);
  //   setTheText(theTextUpdateText);

  //   if (theTextIsDeleting) {
  //     setTheTextDelta((prevDelta) => prevDelta / 2);
  //   }
  //   if (!theTextIsDeleting && theTextUpdateText === theTextFullText) {
  //     setTheTextIsDeleting(true);
  //     setTheTextDelta(theTextPeriod);
  //   } else if (theTextIsDeleting && theTextUpdateText === "") {
  //     setTheTextIsDeleting(false);
  //     setTheTextLoopNum(theTextLoopNum + 1);
  //     setTheTextDelta(500);
  //   }
  // };
  // my training function
  function letsConnect(e) {
    //e.target.style.width = "160px";
    console.log("toimii");
  }
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
                  <h1>
                    {/* orginal text below then my own*/}
                    {/* {"Hi I´m webdecoded"} */}
                    {"Hi I´m Veikko Ruopio "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
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
                  {/* <p className="wrap">{theText}</p> */}
                  <button onClick={letsConnect}>
                    <h5>
                      <a
                        style={{ color: "white" }}
                        href="mailto: veikko1983@gmail.com"
                      >
                        Send email
                      </a>
                    </h5>
                    {/* Let´s connect <ArrowRightCircle size={25} /> */}
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
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
