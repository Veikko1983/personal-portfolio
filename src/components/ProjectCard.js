import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
          <div>
            <h6>
              <a target="_blank" style={{ color: "white" }} href={url}>
                Project Url
              </a>
            </h6>
          </div>
        </div>
      </div>
    </Col>
  );
};
