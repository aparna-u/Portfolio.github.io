import React from 'react';
import './header.css'
import {Navbar,Nav,Container} from 'react-bootstrap';
import Icon from './Icon.png'

function Header (){
return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:'#013640'}}>
  <Container>
  <Navbar.Brand href="#home">
      <img
        src={Icon}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  {/* <Navbar.Brand href="#home">Aparna Udayakumar</Navbar.Brand> */}
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