import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Table, Button, ButtonGroup, Card, Modal, FloatingLabel, Form } from 'react-bootstrap';
import Loading from '../components/Loading';


const apiBaseUrl = `${process.env.REACT_APP_NAITAKNIK_COM_LARAVEL_REACT_API_BASE_URL}/users`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const [editData, setEditData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.get(apiBaseUrl);
    setUsers(res.data);
    console.log(res.data);
    setIsLoading(false);
  }

  const modalHandleClose = () => setShowModal(false);
  const modalHandleShow = () => setShowModal(true);

  const handleEdit = id => {
    const filteredUser = users.filter(user => user.id === id);

    const { name, email } = filteredUser[0];
    console.log(name, email);
    setEditData({
      name: name,
      email: email
    });

    setUserId(filteredUser[0].id);
    console.log(filteredUser[0]);
    console.log("editData", editData);
    modalHandleShow();
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  }

  const handleUpdate = async e => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.put(`${apiBaseUrl}/${userId}`, editData);
      console.log(response.data);
      setIsLoading(false);
      modalHandleClose();
      fetchData();
    } catch (error) {
      console.log("Error responses", error.response.data);
      setIsLoading(false);
    }
  }


  const handleDelete = async id => {
    const conformDelete = window.confirm(`Are you sure to delete id no. ${id} ?`);
    if (conformDelete) {
      setIsLoading(true);
      try {
        const response = await axios.delete(`${apiBaseUrl}/${id}`);
        console.log(response.data);
        setIsLoading(false);
        fetchData();
      } catch (error) {
        console.log("Error responses", error.response.data);
        setIsLoading(false);
      }
    }
  }


  return (
    <>
      <Loading show={isLoading} />
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
                        <Button onClick={() => handleEdit(user.id)} variant="outline-primary" >Edit</Button>
                        <Button onClick={() => handleDelete(user.id)} variant="outline-danger" >Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={showModal} onHide={modalHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User-id {userId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <FloatingLabel controlId="name" label="Name" className="mb-3" >
              <Form.Control name="name" value={editData.name} type="text" onChange={handleChange} placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email address" className="mb-3" >
              <Form.Control name="email" value={editData.email} type="email" onChange={handleChange} placeholder="Email Address" />
            </FloatingLabel>
            {/* <FloatingLabel controlId="password" label="Password" className="mb-3" >
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </FloatingLabel> */}
            <Button variant="primary me-3" onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="outline-danger" onClick={modalHandleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>


        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Users;