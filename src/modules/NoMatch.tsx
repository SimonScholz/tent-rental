import React from "react";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NoMatch: React.FC = () => {
  return (
    <Container>
      <h2>404</h2>
      <p>Hier gibt es keine Seite.</p>
      <LinkContainer to="/">
        <Button variant="info">Zurück zur Hauptseite</Button>
      </LinkContainer>
    </Container>
  );
};

export default NoMatch;
