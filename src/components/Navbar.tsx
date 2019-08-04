import React from "react";
import { Navbar as NBar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navbar: React.FC = () => {
  return (
    <NBar bg="light" expand="lg">
      <LinkContainer to="/">
        <NBar.Brand>Zeltverleih Ohlsen</NBar.Brand>
      </LinkContainer>
      <NBar.Toggle aria-controls="basic-navbar-nav" />
      <NBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/request">
            <Nav.Link>Ausleihen</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link to="/about">Über uns</Nav.Link>
          </LinkContainer>
        </Nav>
      </NBar.Collapse>
    </NBar>
  );
};

export default Navbar;
