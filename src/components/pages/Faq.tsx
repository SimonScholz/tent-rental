import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";

const Faq: React.FC = () => {
  return (
    <Container className="mt-3">
      <h2 className="mb-3">Häufig gestellte Fragen</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Wie lange dauert der Aufbau?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Es dauert etwa 1 - 3 Tage das Zelt + Eqiupment aufzubauen.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Wie lange kann ich stornieren?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Es ist möglich maximal 2 Wochen vorher zu stonieren. Bei
              kurzfristigeren Stonierungen wird eine Gebühr fällig.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Wie viel vorlauf brauchen wir?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Wir versuchen so kurzfristig wie möglich reagieren zu können.
              Allerdings können wir dies nur 3 Monate im Vorraus garantieren.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Faq;
