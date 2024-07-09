import React from "react";
import { Row, Col, Card, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import webicodehelp from "../images/projectss.png";
import rfid from "../images/system.png";
import homeImage from "../images/cherry1.png";
import "./Style.css";

function Home() {
  return (
    <Container fluid id="home">
      <section className="px-5 mx-4">
        <Container className="box">
          <Row className="g-4 mb-5">
            <Col xs={12} md={6} className="mx-4 order-md-1 order-2">
              <Card className="border-0 mb-4">
                <Card.Body>
                  <Card.Title className=" name mt-5  text-md-left">
                    <h3 className="h3">
                      <b>
                        Hello, I'm
                        <br />
                        CHERRY MAE P. DELITRAN
                      </b>
                    </h3>
                    <p className="text-muted fs-0 fw-light">
                      <b className="text-black fw-bold text- center"></b> Bachelor of Science
                      in Information Technology <br />Central Philippines State
                      University
                      <br /> Main Campus, Kabankalan City, Philippines
                      <br /> S.Y. 2023-2024
                    </p>
                    <p className="fw-light fs-4 mt-1 text-justify mb-4">
                      <br /> “It’s not about perfect. It’s about effort.” –
                      Jillian Michaels
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5} className="px-0 order-md-2 order-1">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <div className="overflow-hidden">
                    <img
                      src={homeImage}
                      className="img-fluid border rounded-5 transform-images"
                      alt="Cherry Mae P. Delitran"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="px-sm-4 mx-sm-4">
        <Container fluid id="projects">
          <div className="container px-5 pt-5 box">
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <h6 className="fs-10 bold-500 mt-auto">Recent Projects</h6>
              </Col>
              <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
                <Nav.Link as={NavLink} to="./project"
                  className="btn bg-white btn-xl text-lg fs-5 py-3 px-5 shadow">
                  <i className="bi bi-arrow-up-right-square"></i><b> View All</b>
                </Nav.Link>
              </Col>
            </Row>
            <Row className="gap-1">
              <Col xs={12} className="bg-secondary mt-5 overflow-hidden position-relative">
                <div className="p-1 position-absolute top-15 start-15 btn btn-center">
                  <Nav.Link as={NavLink} to="https://chemae12.github.io/delitran.github..io/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-secondary text-white custom-button"  style={{textDecoration:'none' }}>
                      Sample Website
                    </button>
                  </Nav.Link>
                </div>
                <div className="project-image overflow-hidden wtext-center">
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
              </Col>

              <Col xs={12} className="bg-secondary mt-3 overflow-hidden position-relative">
                <div className="p-1 position-absolute top-15 start-15 btn btn-center">
                  <button className="text-white fw-bold btn btn-outline-secondary ">
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
          </div>
          </Container>
        </Container>
      </section>
    </Container>
   
  );
}

export default Home;
