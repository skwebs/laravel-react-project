import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    console.log('logged out');
    // alert('clicked on logout');
  }


  return (
    <>
      <Navbar bg="light" fixed="top" expand="lg" className="shadow-sm mb-5">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Laravel-React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
              <NavDropdown title="Action" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/multipleInput">Multiple Input</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
