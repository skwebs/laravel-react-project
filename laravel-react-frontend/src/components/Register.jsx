import { useState } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
const Register = () => {

  const baseUrl = "https://naitaknik.com/laravel-react-api/api/users";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerHandler() {
    console.log(name, email, password);
    axios.post(baseUrl, {
      name,
      email,
      password
    }).then(response => {
      console.log(response);
      setName(''); setEmail(''); setPassword('');
    }).catch(error => {
      console.log(error);
    });

  }

  return (
    <>
      <Container>
        <h1 className="text-center mb-4">Register</h1>
        <Row>
          <Col md={5} className="mx-auto">
            <FloatingLabel controlId="name" label="Name" className="mb-3" >
              <Form.Control type="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email address" className="mb-3" >
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Password" className="mb-3" >
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </FloatingLabel>
            <Button onClick={registerHandler} variant="primary" type="submit">Register</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register;
