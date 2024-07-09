import React from "react";
import { NavLink} from "react-router-dom";
import { Container,Nav } from "react-bootstrap";
import portfolio from "../images/logo.png";
import html from "../images/html.png";
import react from "../images/reacts.png";
import xampp from "../images/xamppp.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap-icons.png";
import word from "../images/words.jpg";
import excel from "../images/excel.jpg";
import powerpoint from "../images/powerpoint.jpg";
import publisher from "../images/publisher.jpg";
import "./Style.css";

function About() {
  return (
    <Container className="px-lg-8 mx-lg-5">
      <Container className="px-4">
        <h1 className="abouts">About</h1>
        <h3 className="fw-bold">Hello! Im Cherry Mae P. Delitran aspiring Data Encoding Specialist</h3>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-6">
            <p className="del">
              I’m a passionate and dedicated IT student. Currently
              pursuing a Bachelor's degree in Information Technology at Central
              Philippines State University, I've gained hands-on experience
              building websites, developing systems and data encoding using MS Office. I love diving into
              problem-solving and debugging, always ready to tackle  and discover innovative solutions. My academic journey and
              practical projects have ignited my enthusiasm for contributing to
              the tech world. I’m eager to apply my skills in a dynamic IT
              environment, working on impactful projects that push the
              boundaries of technology. With a drive to continuously enhance my
              expertise, I’m seeking opportunities to make a meaningful impact
              in the IT field. Let’s create something amazing together!
            </p>
          </div>
          <div className="col-6 ">
            <div className="project-images overflow-hidden">
              <img
                src={portfolio}
                className="transform-images float-end transform-image "
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <h5 className="fw-bold">Do you want to know more about my skills? Here are some!</h5>
          <ul>
            <li>Data Formatting: Ability to format data according to specified guidelines or standards.</li>
            <li>Data Analysis: Skills in using Excel for data analysis tasks related to encoded data, including filtering and sorting</li>
            <li>Document Encoding in Word: Familiarity with encoding techniques for text and documents.</li>
          </ul>
          </div>
          <div className="col-6">
            <h5 className=" tech bg-dark text-light"><strong>Technology Stack</strong></h5>
            <div className="row">
            <div className="col-2">
              <div className="project-images">
              <img
                src={html}
                className="transform-imagess float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={react}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={xampp}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={css}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={bootstrap}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={word}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={excel}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={powerpoint}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            <div className="col-2">
            <div className="project-images">
              <img
                src={publisher}
                className="transform-img float-end "
                alt=""
              />
            </div>
            </div>
            </div>
          </div>
          <div className="col-6">
            <h4 className="fw-bold">Want to hire me as a tutor?</h4>
          <p>Just visit my contact information provided for the inquires and other matters related to work.</p>
          <h5 className="fw-bold">Social Links</h5>
            <Nav.Link as={NavLink} to="https://web.facebook.com/cherrymae.deletran.31" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-right text-dark"></i> Facebook</Nav.Link>
            <Nav.Link as={NavLink} to="mailto:delitran.cherrymae@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-right text-dark"></i> Gmail</Nav.Link>
            <Nav.Link as={NavLink} to="https://github.com/chemae12" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-right text-dark"></i> Github</Nav.Link>
            <Nav.Link as={NavLink} to="https://www.instagram.com/che_delitran?igsh=d3o5NnRmN3B2Mndp" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-right text-dark"></i> Instagram</Nav.Link>
            <Nav.Link as={NavLink} to="https://www.tiktok.com/@chemaeyoe?lang=en" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-right text-dark"></i> Tiktok</Nav.Link>
          </div>
        </div>
         <br></br>
        <div className="container border-top"></div>
      </Container>
    </Container>
  );
}

export default About;
