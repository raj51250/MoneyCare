import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo/careLogo.svg";
import countryIconIndia from "../img/bharat-flag.png";
import countryIconUK from "../img/british-flag.png";
import countryIconGermany from "../img/germany-flag.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="header">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#services">services</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown
            title={
              <>
                <img
                  src={countryIconIndia}
                  alt="Country"
                  className="country-icon"
                />
                Country
              </>
            }
            id="country-nav-dropdown"
            className="country-dropdown"
          >
            <NavDropdown.Item href="#country/india">
              <img
                src={countryIconIndia}
                alt="India"
                className="dropdown-flag"
              />{" "}
              India
            </NavDropdown.Item>
            <NavDropdown.Item href="#country/uk">
              <img src={countryIconUK} alt="UK" className="dropdown-flag" /> UK
            </NavDropdown.Item>
            <NavDropdown.Item href="#country/germany">
              <img
                src={countryIconGermany}
                alt="Germany"
                className="dropdown-flag"
              />{" "}
              Germany
            </NavDropdown.Item>
          </NavDropdown>
          <div className="divider"></div>
          <Button variant="danger" className="login-btn">
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
