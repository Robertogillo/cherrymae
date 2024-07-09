import React from "react";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
  Row,
  Col
} from "react-bootstrap";

function AppNavbar() {
  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );
  return (
    <Navbar className="py-4 px-1 mt-lg-5">
      <Container className="px-5 ms-auto">
        <Row className="w-100">
          <Col>
            <Navbar.Brand>
              <p className="f fw-bold mb-0 pb-0 text-success text-center text-lg-start">All rights reserved 2024</p>
            </Navbar.Brand>
          </Col>
          <Col>
                <Navbar.Brand>
              <div className="footers-content">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Facebook")}
              >
                <Nav.Link href="https://web.facebook.com/roberto.r.gillo" target="_blank">
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
                <Nav.Link href="https://www.instagram.com/gillo.roberto/" target="_blank">
                  <i className="bi bi-instagram fs-4 mx-2 text-danger"></i>
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, "Tiktok")}
              >
                <Nav.Link href="https://www.tiktok.com/@roberto.gillo" target="_blank">
                  <i className="bi bi-tiktok fs-4 mx-2 text-dark"></i>
                </Nav.Link>
              </OverlayTrigger>
              </div>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
