import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const correctEmail = 'robj.charpentier@gmail.com';  // Replace with your desired email
  const correctPassword = 'password';    // Replace with your desired password

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      navigate('/home');  // Navigate to the home page
    } 
    else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to FitCheckMate</h1>
      <p>Upload your clothes and let us help you match them!</p>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" href="/home">
          Login
        </Button>
        <Button variant='primary' type='submit' href="/forgot">
            Forgot Password?
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
