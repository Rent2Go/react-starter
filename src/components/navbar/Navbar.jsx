import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../src/assets/logo-dark.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { SignedIn } from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbars = () => {

  const[isAuthentication, setIsAuthentication] = useState(false);
  const history = useNavigate()

  function handleSignOut(params){
     

    setIsAuthentication(false)
    history('/')
}
function handleSignIn(params){

   setIsAuthentication(true)
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="logo-container">
          <img className="nav-logo" src={logo} />
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/productsAdd" className="nav-link">
              Categories
            </Link>
          </Nav>
          <Nav className="auth">
    {
      isAuthentication ?  <SignedOut signedOut={handleSignOut}/> : <SignedIn signedIn={handleSignIn}/>
    }
            
         
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
