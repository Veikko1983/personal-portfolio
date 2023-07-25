import { Container, Row, Col } from "react-bootstrap";

export const Languages = () => {
  return (
    <Container className="languages" id="languages">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} style={{ margin: "auto" }}>
          <div>
            <h2>Languages</h2>
            <br />
            <h5>English</h5>
            <p>Professional working proficiency</p>
            <br />
            <h5>Finnish</h5>
            <p>Native or bilingual proficiency</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
