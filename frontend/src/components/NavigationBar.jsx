import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const NavBar = () => {
  return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">BGE</Navbar.Brand> {/* Use Link for navigation */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link for navigation */}
              <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Use Link for navigation */}
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Use Link for navigation */}
            </Nav>
            {/* Login Button*/}
            <Nav>
              <Button variant="outline-light" as={Link} to="/login">Login</Button> {/* Use Link for navigation */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
