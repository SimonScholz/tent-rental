import React from "react";
import { Navbar as NBar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navbar: React.FC = () => {
  return (
    <NBar bg="info" expand="lg" className="navbar-dark">
      <LinkContainer to="/">
        <NBar.Brand>Zeltverleih Ohlsen</NBar.Brand>
      </LinkContainer>
      <NBar.Toggle aria-controls="basic-navbar-nav" />
      <NBar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/impressions">
            <Nav.Link>Impressionen</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/calendar">
            <Nav.Link>Kalender</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/request">
            <Nav.Link>Buchen</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>Über uns</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
        </Nav>
      </NBar.Collapse>
    </NBar>
  );
};

export default Navbar;
