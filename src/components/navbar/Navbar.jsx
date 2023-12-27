import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../src/assets/logo-dark.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbars = () => {
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
          <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
