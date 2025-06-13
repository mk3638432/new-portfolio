import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ name, desc, github, link, img }: ProjectType) => {
  console.log(img, 43234234);
  return (
    <Col lg="6">
      <Card className="w-[450px]" key={name}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image className="p-3 cursor-pointer" alt="img" src={img || "/img/fallback.png"} width={450} height={300} />
        </a>
        <div className="pl-4">
          <h3>{name}</h3>
          <p className="description mt-3">{desc}</p>

          {link ? (
            <Button
              className="btn-icon"
              color="success"
              href={link}
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-arrow-right mr-2" />
              </span>
              <span className="nav-link-inner--text ml-1">Demo</span>
            </Button>
          ) : null}
        </div>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
