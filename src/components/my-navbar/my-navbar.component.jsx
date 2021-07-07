import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="logoimage" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link id="nav-home" href="#home">Home</Nav.Link>
              <Nav.Link id="nav-about" href="#about">About</Nav.Link>
              <Nav.Link id="nav-skills" href="#skills">Skills</Nav.Link>
              <Nav.Link id="nav-experience" href="#experience">Experience</Nav.Link>
              <Nav.Link id="nav-education" href="#education">Education</Nav.Link>
              <Nav.Link id="nav-projects" href="#projects">Projects</Nav.Link>
              <Nav.Link id="nav-contact" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
