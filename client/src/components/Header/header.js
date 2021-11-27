import React from 'react';
import './header.css'
import {Navbar,Nav,Container} from 'react-bootstrap';

function Header (){
return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Aparna Udayakumar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link eventKey={2} href="#about">
        About
      </Nav.Link>
      <Nav.Link eventKey={3} href="#experience">
        Experience
      </Nav.Link>
      <Nav.Link eventKey={4} href="#education">
        Education
      </Nav.Link>
      <Nav.Link eventKey={5} href="#blog">
        Blog
      </Nav.Link>
      <Nav.Link eventKey={6} href="#contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        )
}

export default Header;