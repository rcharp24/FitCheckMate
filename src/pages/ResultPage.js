import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ResultPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Match Results</h2>
          <p>Based on your uploaded outfit, here are our matching recommendations:</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h4>Recommended Match:</h4>
          <ul>
            <li>Item 1: Casual T-shirt</li>
            <li>Item 2: Blue Jeans</li>
            <li>Item 3: Sneakers</li>
          </ul>
          <Button variant="secondary">See More Matches</Button>
        </Col>
        <Col md={6}>
          <h4>What’s Not Working:</h4>
          <ul>
            <li>Item 1: Too bright for the overall theme</li>
            <li>Item 2: Needs a jacket to balance</li>
          </ul>
          <Button variant="warning">Try Again</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultPage;
