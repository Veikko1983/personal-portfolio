import { Container, Row, Col } from "react-bootstrap";

export const Education = () => {
  return (
    <Container className="education" id="education">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} style={{ margin: "auto" }}>
          <div>
            <h2>Education</h2>
            <br />
            <h5>Suomen Yrittäjäopisto</h5>
            <p>Web Software Development Apr 2022-Oct 2022</p>
            <br />
            <h5>AhlmanEdu</h5>
            <p>Game Technology 2019-2020</p>
            <br />
            <h5>Hervanta Vocational School</h5>
            <p>
              Vocational upper secondary qualification of food industry
              1999-2021
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
