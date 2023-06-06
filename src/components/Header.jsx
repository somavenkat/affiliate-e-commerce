import React from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <section>
        <Navbar bg="primary" expand="md" variant="dark ">
          <Container>
            <Navbar.Brand href="#home">SoCalledDeals</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-md-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#deals">Deals</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
