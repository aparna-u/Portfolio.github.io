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
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        About
      </Nav.Link>
      <Nav.Link eventKey={3} href="#memes">
        Experience
      </Nav.Link>
      <Nav.Link eventKey={4} href="#memes">
        Education
      </Nav.Link>
      <Nav.Link eventKey={5} href="#memes">
        Blog
      </Nav.Link>
      <Nav.Link eventKey={6} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        )
}

export default Header;