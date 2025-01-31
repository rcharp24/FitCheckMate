import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <h1>FitCheckMate</h1>
          <p>Upload your clothes and let us help you match them!</p>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Why Choose Us?</Card.Title>
              <Card.Text>
                We analyze your clothing and recommend matching outfits based on color, style, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
