import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Table, Button, ButtonGroup } from 'react-bootstrap';


const Users = () => {
  const [users, setUsers] = useState([]);
  const baseUrl = "https://naitaknik.com/laravel-react-api/api/users";
  useEffect(() => {
    async function fetchData() {

      const res = await axios.get(baseUrl);
      setUsers(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);

  //   axios.get('http://localhost:8000/api/users')
  //     .then(response => {
  //       setUsers(response.data);
  //       console.log(response);
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  function editHandler(id) {
    console.log(id);
  }




  function deleteHandler(id) {
    console.log(id);
    // axios.delete('http://localhost:8000/api/users/' + id)
    //   .then(response => {
    //     console.log(response);
    //     setUsers(users.filter(user => user.id !== id));
    //   }).catch(error => {
    //     console.log(error);
    //   });
  }



  return (
    <>
      <Container className="mt-4">

        <Table striped bordered hover>
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
                    <Button onClick={() => editHandler(user.id)} variant="primary" data-id={user.id}>Edit</Button>
                    <Button onClick={() => deleteHandler(user.id)} variant="success" data-id={user.id}>Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            )}
          </tbody>
        </Table>

      </Container>
    </>
  )
}

export default Users
