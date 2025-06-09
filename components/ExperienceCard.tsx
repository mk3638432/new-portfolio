import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Badge } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ id, companyName, period, position, location, skills, logo }: ExperienceType) => {
  return (
    <Col lg="6" className="mb-4">
      <Card className="shadow-lg border-0 text-center rounded h-100">
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h4" className="mb-2 font-weight-bold">
            {position}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {period}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">
            <div className="border rounded py-1 px-2 d-inline-block">{companyName}</div>
          </CardSubtitle>
          <CardSubtitle className="mb-3 text-muted d-flex justify-content-center align-items-center gap-1">
            <i className="fas fa-map-marker-alt me-1" />
            {location}
          </CardSubtitle>

          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {skills.map((skill, index) => (
              <Badge key={index} color="secondary" className="py-2 px-3 rounded-pill">
                {skill}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
