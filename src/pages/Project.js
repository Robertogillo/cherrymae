import React from "react";
import { Row, Col, Container,Nav } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import webicodehelp from "../images/projectss.png";
import rfid from "../images/system.png";
import "./Style.css";

function Project() {
  return (
    <Container className="px-5 mx-6">
      <h1 className="abouts">Projects</h1>

      <h5>Below are some of the key projects I have contributed to</h5>

        <Row className="gap-2">
          
          <Col xs={12} className="bg-secondary mt-5 overflow-hidden position-relative">
                <div className="p-1 position-absolute top-15 start-15 btn btn-center">
                  <Nav.Link as={NavLink} to="https://chemae12.github.io/delitran.github..io/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-secondary text-white custom-button"  style={{textDecoration:'none' }}>
                      Sample Website
                    </button>
                  </Nav.Link>
                </div>
                <div className="project-image overflow-hidden text-center">
                  <img
                    src={webicodehelp}
                    className=" p-3 transform-images float-end p-5"
                    alt="Sample Website"
                    style={{
                     width:'100%',
                     height:'auto',
                     maxWidth:'750px',
                     maxHeight:'30rem',
                     marginLeft:'auto',
                     marginRight:'auto'
                    }}
                  />
                </div>
              </Col>    \
              <Col xs={12} className="bg-secondary mt-3 overflow-hidden position-relative">
                <div className="p-1 position-absolute top-15 start-15 btn btn-center">
                <button className="text-white fw-bold btn btn-ontline-secondary ">
                    CPSU EVENTS SYSTEM
                  </button>
                </div>
                <div className="project-image overflow-hidden">
                  <img
                    src={rfid}
                    className="transform-images float-end p-5"
                    alt="CPSU Events System" style={{ width:'100%',
                      height:'auto',
                      maxWidth:'750px',
                      maxHeight:'30rem',
                      marginLeft:'auto',
                      marginRight:'auto'}}
                  />
                </div>
              </Col>
        </Row>
    </Container>
  );
}

export default Project;
