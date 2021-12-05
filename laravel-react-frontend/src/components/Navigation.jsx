import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

// import MenuItems from './MenuItems';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import "hamburgers/_sass/hamburgers/hamburgers.scss";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [act, setAct] = useState("");
  const handleClose = () => { setShow(false); setAct(""); }
  const handleShow = () => { setShow(true); setAct("is-active"); }
  const navigate = useNavigate();
  const handleLogout = () => {
    handleClose();
    localStorage.removeItem('token');
    navigate('/login');
    console.log('logged out');
    // alert('clicked on logout');
  }
  const menus = ['Home', 'About', 'Contact', 'Products', 'Users', 'Register', 'Login'];
  const renderMenuItems = (
    <Nav className="ms-auto">
      {menus.map((menu, index) => (
        <Nav.Link className="nav-item" onClick={handleClose} as={NavLink} key={index} to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}>{menu}</Nav.Link>
      ))}
      <NavDropdown align={{ lg: 'end' }} title="Action" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={handleClose} as={NavLink} to="/multipleInput">Multiple Input</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  // const renderMenuItems = (
  //   <Nav className="ms-auto custom_nav">
  //     <Nav.Link as={NavLink} to="/">Home</Nav.Link>
  //     <Nav.Link onClick={handleClose} as={NavLink} to="/products">Products</Nav.Link>
  //     <Nav.Link onClick={handleClose} as={NavLink} to="/register">Register</Nav.Link>
  //     <Nav.Link onClick={handleClose} as={NavLink} to="/login">Login</Nav.Link>
  //     <Nav.Link onClick={handleClose} as={NavLink} to="/users">Users</Nav.Link>
  //     <NavDropdown title="Action" id="basic-nav-dropdown">
  //       <NavDropdown.Item onClick={handleClose} as={NavLink} to="/multipleInput">Multiple Input</NavDropdown.Item>
  //       <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
  //     </NavDropdown>
  //   </Nav>
  // );



  return (
    <>

      <Navbar bg="light" fixed="top" expand="lg" className="shadow-sm mb-5">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Laravel-React</Navbar.Brand>
          <button onClick={handleShow} className={`d-lg-none ${act} hamburger hamburger--slider`} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          {/* <Navbar.Toggle onClick={handleShow} />  */}
          <Navbar.Collapse id="basic-navbar-nav">
            {renderMenuItems}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas className="sidebar d-lg-none" show={show} onHide={handleClose} onShow={handleShow}>
        <Offcanvas.Header className="bg-primary">
          <Offcanvas.Title>Laravel-React</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {renderMenuItems}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navigation;
