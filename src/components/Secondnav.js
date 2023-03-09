import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Secondnav() {
    return (
        <div>
            {/* <Navbar bg="warning" variant="warning" className='mx-auto'>
                <Container>
                    <Navbar.Brand href="#home"><NavDropdown title="Categories" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Books</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Toys & Games
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Stationery
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action6">
                           Gifts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action7">
                            Magazines
                        </NavDropdown.Item>
                    </NavDropdown></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Books</Nav.Link>
                        <Nav.Link href="#features">Toys</Nav.Link>
                        <Nav.Link href="#pricing">Stationery</Nav.Link>
                        <Nav.Link href="#pricing">Gifts & Accessories</Nav.Link>
                        <Nav.Link href="#pricing">Magazines</Nav.Link>
                        <Nav.Link href="#pricing">The Write Place</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            
            <Navbar collapseOnSelect expand="sm" bg="warning" variant="warning">
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    
                    <Navbar.Brand href="#home"><NavDropdown title="Categories" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Books</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Toys & Games
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Stationery
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action6">
                            Gifts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action7">
                            Magazines
                        </NavDropdown.Item>
                    </NavDropdown></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Books</Nav.Link>
                        <Nav.Link href="#features">Toys</Nav.Link>
                        <Nav.Link href="#pricing">Stationery</Nav.Link>
                        <Nav.Link href="#pricing">Gifts & Accessories</Nav.Link>
                        <Nav.Link href="#pricing">Magazines</Nav.Link>
                        <Nav.Link href="#pricing">The Write Place</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Secondnav
