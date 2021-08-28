import React from 'react';
import './header.css'
import {Navbar,Nav,Container} from 'react-bootstrap';

function Header (){
    return (
        
 <div>
    <Navbar className="d-block" fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Aparna Udayakumar</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</div> 
    )

}

export default Header;