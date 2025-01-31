import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const MainPage = () => {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col>
          <h1>Welcome to FitCheckMate</h1>
          <p>Upload your clothes and let us help you match them!</p>
          <Button variant="primary" size="lg" href="/login">
              Lets Login and get Started
          </Button>
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

export default MainPage;
