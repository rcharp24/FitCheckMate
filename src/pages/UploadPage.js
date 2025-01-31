import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to upload file and analyze it
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Upload Your Clothes</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>Choose an image of your clothes</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!file}>
              Analyze
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadPage;
