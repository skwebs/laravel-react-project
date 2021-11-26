import { useState } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {

  const apiBaseUrl = `${process.env.REACT_APP_NAITAKNIK_COM_LARAVEL_REACT_API_BASE_URL}/users`;

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',

  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    // console.log(name, value);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
    console.log(userData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post(apiBaseUrl, userData)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Container>
        <h1 className="text-center mb-4">Register</h1>
        <Row>
          <Col md={5} className="mx-auto">
            <Form onSubmit={handleSubmit} >
              <FloatingLabel controlId="name" label="Name" className="mb-3" >
                <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="Email address" className="mb-3" >
                <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email Address" />
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password" className="mb-3" >
                <Form.Control type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
              </FloatingLabel>
              <Button name="submit" variant="primary" type="submit">Register</Button>
              <Button variant="outline-danger ms-3" type="reset">Reset</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register;
