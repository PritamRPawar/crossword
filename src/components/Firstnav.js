import React from 'react'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';


function Firstnav() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='./images/logo.png' alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">My Account</Nav.Link>
            <Nav.Link href="#pricing">Gift Card Balance</Nav.Link>
            <Nav.Link href="#pricing">Track Your Order</Nav.Link>
            <Nav.Link href="#pricing">My Wishlist</Nav.Link>
            <Button variant="dark">Customer Care</Button>
          </Nav>
          <div>
            <input type="text" />
            <Button variant="warning"><i class="fa-solid fa-cart-shopping"></i>My Cart</Button>
          </div>
        </Container>  
      </Navbar> */}
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Navbar.Brand href="#home"><img src='./images/logo.png' alt="" /></Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">My Account</Nav.Link>
              <Nav.Link href="#pricing">Gift Card Balance</Nav.Link>
              <Nav.Link href="#pricing">Track Your Order</Nav.Link>
              <Nav.Link href="#pricing">My Wishlist</Nav.Link>
              <Nav.Link variant="dark">Customer Care</Nav.Link>
              <Nav.Link variant="warning"><i class="fa-solid fa-cart-shopping"></i>My Cart</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  )
}

export default Firstnav
