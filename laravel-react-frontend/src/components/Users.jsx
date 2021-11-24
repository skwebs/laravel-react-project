import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Table, Button, ButtonGroup, Card, Modal, FloatingLabel, Form } from 'react-bootstrap';

const baseUrl = "https://naitaknik.com/laravel-react-api/api/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // get data by axios
    const res = await axios.get(baseUrl);
    const users = res.data;
    // uncomment below line to use fetch api instead of axios
    // const res = await fetch(baseUrl, { 'Content-Type': 'application/json' });
    // const users = await res.json();
    setUsers(users);
    console.log(users);
  }

  //   axios.get('http://localhost:8000/api/users')
  //     .then(response => {
  //       setUsers(response.data);
  //       console.log(response);
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  async function editHandler(id) {
    const res = await axios.get(`${baseUrl}/${id}`);
    const user = await res.data;
    setUserId(id);
    setName(user.name);
    setEmail(user.email);
    // setPassword(user.password);
    console.log(name, email);
    handleShow();
  }


  async function updateHandler() {
    const res = await axios.put(`${baseUrl}/${userId}`, {
      name,
      email,
    });
    fetchData();
    handleClose();
    console.log(res);
  }

  async function deleteHandler(id) {
    const conformDelete = window.confirm(`Are you sure to delete id no. ${id} ?`);
    if (conformDelete) {
      const res = await axios.delete(`${baseUrl}/${id}`);
      // const newUsers = users.filter(user => user.id !== id);
      // setUsers(newUsers);
      fetchData();
      console.log(res);
    }
  }


  return (
    <>
      <Container fluid className="my-4">
        <Card>
          <Card.Body >
            <Table striped bordered hover responsive className="mb-0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) =>
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at}</td>
                    <td>{user.updated_at}</td>
                    <td>
                      <ButtonGroup aria-label="Action buttons group">
                        <Button onClick={() => editHandler(user.id)} variant="outline-primary" data-id={user.id}>Edit</Button>
                        <Button onClick={() => deleteHandler(user.id)} variant="outline-danger" data-id={user.id}>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User-id {userId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="name" label="Name" className="mb-3" >
            <Form.Control value={name} type="name" onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel controlId="email" label="Email address" className="mb-3" >
            <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          </FloatingLabel>
          {/* <FloatingLabel controlId="password" label="Password" className="mb-3" >
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </FloatingLabel> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Users;
