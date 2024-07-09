import React from "react";
import { Container,Nav } from "react-bootstrap";
import { NavLink} from "react-router-dom";

function Contact() {
  return (
    <Container className="px-5 mx-auto">
      <h1 className="abouts">Contact</h1>
      <h6 className="fw-bold">If you have any questions, feel free to reach out.</h6>
      <hr />
      <ul>
        <li>
          <strong><b>Gmail:</b> </strong>
          <Nav.Link as={NavLink} to="mailto:delitran.cherrymae@gmail.com" target="_blank" rel="noopener noreferrer">
            delitran.cherrymae@gmail.com
          </Nav.Link>
        </li>
        <li>
          <strong><b>Facebook:</b> </strong>
          <Nav.Link as={NavLink} to="https://web.facebook.com/cherrymae.deletran.31" target="_blank" rel="noopener noreferrer">
            Cherry Mae P. Delitran
          </Nav.Link>
        </li>
        <li>
          <strong><b>GitHub:</b> </strong>
          <Nav.Link as={NavLink} to="https://github.com/chemae12" target="_blank" rel="noopener noreferrer">
            delitran.github.io
          </Nav.Link>
        </li>
        <li>
          <strong><b>Instagram:</b> </strong>
          <Nav.Link as={NavLink} to="https://www.instagram.com/che_delitran?igsh=d3o5NnRmN3B2Mndp" target="_blank" rel="noopener noreferrer">
            Cherry Mae P. Delitran
          </Nav.Link>
        </li>
        <li>
          <strong><b>Tiktok:</b> </strong>
          <Nav.Link as={NavLink} to="https://www.instagram.com/che_delitran?igsh=d3o5NnRmN3B2Mndp" target="_blank" rel="noopener noreferrer">
            Cherry Mae P. Delitran
          </Nav.Link>
        </li>
      </ul>
      <hr />
      <br />
    </Container>
  );
}

export default Contact;


