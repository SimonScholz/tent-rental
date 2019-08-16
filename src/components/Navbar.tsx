import React from "react";
import { Navbar as NBar, Nav } from "react-bootstrap";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <NBar bg="info" expand="lg" className="navbar-dark">
      <Link href="/" passHref>
        <NBar.Brand>Zeltverleih Ohlsen</NBar.Brand>
      </Link>
      <NBar.Toggle aria-controls="basic-navbar-nav" />
      <NBar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/impressions" passHref>
            <Nav.Link>Impressionen</Nav.Link>
          </Link>
          <Link href="/calendar" passHref>
            <Nav.Link>Kalender</Nav.Link>
          </Link>
          <Link href="/request" passHref>
            <Nav.Link>Buchen</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>Über uns</Nav.Link>
          </Link>
          <Link href="/faq" passHref>
            <Nav.Link>FAQ</Nav.Link>
          </Link>
        </Nav>
      </NBar.Collapse>
    </NBar>
  );
};

export default Navbar;
