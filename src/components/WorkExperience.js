import { Container, Row, Col } from "react-bootstrap";

export const WorkExperience = () => {
  return (
    <Container className="workExperience" id="workExperience">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} style={{ margin: "auto" }}>
          <div>
            <hr style={{ color: "whitesmoke" }} />
            <h2>Work Experience</h2>
            <br />
            <h5>Netmaa Ltd.</h5>
            <p>Trainee Front-End Web Developer: Nov 2022-Mar 2023</p>
            <br />
            <h5>Tapola Ltd.</h5>
            <p>Food Production Worker: Oct 2003-Jan 2021</p>
            <hr style={{ color: "whitesmoke" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
