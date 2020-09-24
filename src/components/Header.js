import React, { Component, Fragment } from 'react';

import {
  Nav, Navbar, NavDropdown, Form, FormControl, Button
} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="/images/Digitech Vidya_fevicon_32 x 32 pixel.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Digitech Vidhya"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Artificial Intelligence</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">BI and Visualization</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Data Science</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Big Data</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Programming & Frameworks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Databases</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Community" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Events & hackathon</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Course Community</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Business" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hire us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Collaboration</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Careers</Nav.Link>
              <NavDropdown title="About us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Person Bio</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Contact us</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ marginTop: "5px" }} />
              <Button variant="outline-light" className="nav-item" style={{ marginTop: "5px" }}>Search</Button>
            </Form>
            <a href="#features" className="lock"><i className="material-icons ">lock_open</i></a>

          </Navbar.Collapse>
        </Navbar>

      </Fragment>
    );
  }
}

export default Header;