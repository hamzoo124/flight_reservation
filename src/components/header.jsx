import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import OrderN from "./OrderN";
const Header=()=>{
    return(
          <>
          <div className="container-fluid bg-light border">
          <Navbar bg="light" data-bs-theme="light">
       
          <Navbar.Brand href="#home">Tripma</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">Flights</Nav.Link>
            <Nav.Link href="#">Hotels</Nav.Link>
            <Nav.Link href="#">Packages</Nav.Link>
            <Nav.Link href="#">Sign in</Nav.Link>
            {/* <Button variant="primary ">Signup</Button> */}
          < OrderN/>

            
          </Nav>
     
      </Navbar>
      </div>

          </>
    );
}
export default Header;