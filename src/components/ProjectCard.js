import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <h5>
              <a target="_blank" style={{ color: "white" }} href={url}>
                Project Url
              </a>
            </h5>
          </div>
        </div>
      </div>
    </Col>
  );
};
