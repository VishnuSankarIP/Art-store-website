import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
   <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Cultured .</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#features">all painting</Nav.Link>
            <Nav.Link href="#pricing">history</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Header
