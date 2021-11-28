import { useState } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Button, Table, Card } from 'react-bootstrap';

const MultipleInput = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',

  });

  const [records, setRecords] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newRecord = { ...userData, id: Date.now() };

    setRecords([...records, newRecord]);
    setUserData({ name: '', email: '', password: '', });

    console.log(records);
    console.log(userData);
  }


  return (
    <>
      <Container className="mb-4" >
        <h1 className="text-center mb-4">Multiple Input</h1>
        <Row>
          <Col className="mx-auto">
            <Form onSubmit={handleSubmit} >
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <FloatingLabel controlId="name" label="Name" className="mb-3" >
                    <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <FloatingLabel controlId="email" label="Email address" className="mb-3" >
                    <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email Address" />
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={4} lg={3}>
                  <FloatingLabel controlId="password" label="Password" className="mb-3" >
                    <Form.Control type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <Button name="submit" variant="primary" type="submit">Store Records</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Card>
          <Card.Header>
            <h3>Records</h3>
          </Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {
                  records.map(record => (
                    <tr key={record.id}>
                      <td>{record.id}</td>
                      <td>{record.name}</td>
                      <td>{record.email}</td>
                      <td>{record.password}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default MultipleInput;
