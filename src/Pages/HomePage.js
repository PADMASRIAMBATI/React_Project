import React from 'react';
import { Container,  Row, Col, Card, Carousel } from 'react-bootstrap';
import imageHover from './Logo-2.png'; // Replace with your hover image path
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <>
      {/* Hero Image with Hover Effect */}
      <div className="hero-image-container">
        <img src={imageHover}
          alt="Hover Image"
          className="img-fluid hero-image"
        />
       
      </div>

      {/* Small Cards Section */}
      <Container className="features-section">
        <h2 className="text-center mb-4">Our Features</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>Description for feature 1 goes here.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>Description for feature 2 goes here.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>Description for feature 3 goes here.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Slider Section */}
      <Container className="gallery-section">
        <h2 className="text-center mb-4">Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={3} className="mx-2">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Slide 1</Card.Title>
                    <Card.Text>Some quick example text for slide 1.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mx-2">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Slide 2</Card.Title>
                    <Card.Text>Some quick example text for slide 2.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mx-2">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Slide 3</Card.Title>
                    <Card.Text>Some quick example text for slide 3.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        </Carousel>
      </Container>
    </>
  );
}

export default HomePage;
