import { useState } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Loading from './Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const apiBaseUrl = `${process.env.REACT_APP_NAITAKNIK_COM_LARAVEL_REACT_API_BASE_URL}/users`;
  const [isLoading, setIsLoading] = useState(false);
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      // with fetch api

      // const response = await fetch(apiBaseUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });
      // const res = await response.json();
      // console.log("res", res);
      // console.log("response", response);
      // console.log("response.status", response.status);

      // with axios
      const response = await axios.post(apiBaseUrl, userData);
      setUserData({ name: '', email: '', password: '', });
      console.log("response", response);
      console.log("response.status", response.status);
      console.log("response.data", response.data);
      toast.success(response.data.message);
      setIsLoading(false);

    } catch (error) {
      if (error.response) {
        const err = error.response.data;
        const k = Object.keys(err)

        if (k.length > 0) {
          for (let i = 0; i < k.length; i++) {
            toast.error(err[k[i]][0]);
          }
        }
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loading show={isLoading} />
      <ToastContainer />
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
