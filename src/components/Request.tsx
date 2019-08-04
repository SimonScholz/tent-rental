import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const Requests: React.FC = () => {
  return (
    <Container>
      <h2>Equipment ausleihen</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Label>Email Addresse</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Label>Telefon Nummer</Form.Label>
          <Form.Control type="text" placeholder="Telefon Nr. (Optional)" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Absenden
        </Button>
      </Form>
    </Container>
  );
};

export default Requests;
