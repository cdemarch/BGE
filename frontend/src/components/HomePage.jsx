import React from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from "./NavigationBar.jsx";

const HomePage = () => {
  return (
    <>
      {/* Main Section */}
      <Container fluid className="mt-5">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Welcome to BGE</h1>
            <p>
              This is the main section of your homepage. Here, you can include an introduction to your application, highlight features, or display any other content you want to show.
            </p>
            <Button variant="primary" href="/get-started">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
