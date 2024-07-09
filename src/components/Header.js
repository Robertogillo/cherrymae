import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./Header.css";

function AppNavbar() {
  const page = useLocation();
  const activePath = page.pathname;

  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );

  return (
    <Navbar bg="light" expand="lg" className="py-lg-4 px-lg-1">
      <Container className="py-5 px-5 ms-auto">
        <Navbar.Brand as={NavLink} to="/">
          <h5 className="fw-bold mb-0 pb-0">Delitran, Cherry Mae P.</h5>
          <p className="text-base font-light text-success">
            Information Technology
          </p>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-route m-auto gap-4">
            <Nav.Link as={NavLink} to="/about">
              About
              {activePath === "/about" && <i className="bi bi-arrow-down"></i>}
            </Nav.Link>

            <Nav.Link as={NavLink} to="/project">
              Project
              {activePath === "/project" && <i className="bi bi-arrow-down"></i>}
            </Nav.Link>

            <Nav.Link as={NavLink} to="/experience">
              Experience
              {activePath === "/experience" && (
                <i className="bi bi-arrow-down"></i>
              )}
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact
              {activePath === "/contact" && <i className="bi bi-arrow-down"></i>}
            </Nav.Link>
          </Nav>

          <Navbar.Brand className="d-flex">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, "Facebook")}
            >
              <Nav.Link
                href="https://web.facebook.com/roberto.r.gillo"
                target="_blank"
              >
                <i className="bi bi-facebook fs-4 mx-2 text-primary"></i>
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, "GitHub")}
            >
              <Nav.Link href="https://github.com/dashboard" target="_blank">
                <i className="bi bi-github fs-4 mx-2 text-dark"></i>
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, "Instagram")}
            >
              <Nav.Link
                href="https://www.instagram.com/gillo.roberto/"
                target="_blank"
              >
                <i className="bi bi-instagram fs-4 mx-2 text-danger"></i>
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, "Tiktok")}
            >
              <Nav.Link
                href="https://www.tiktok.com/@roberto.gillo"
                target="_blank"
              >
                <i className="bi bi-tiktok fs-4 mx-2 text-dark"></i>
              </Nav.Link>
            </OverlayTrigger>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
