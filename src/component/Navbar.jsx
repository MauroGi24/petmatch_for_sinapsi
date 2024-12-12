import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import PetsIcon from '@mui/icons-material/Pets';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <PetsIcon className='nav-ico'/>
          <span className='nav-title'>PetMatch</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navlink'>
              Home
            </Nav.Link>
            <Nav.Link className='navlink'>
              Adozioni
            </Nav.Link>
            <Nav.Link className='navlink'>
              Chi Siamo
            </Nav.Link>
            <Nav.Link className='navlink'>
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
