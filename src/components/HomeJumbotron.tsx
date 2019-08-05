import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";
import tentImg from "../assets/tent-lampignons.png";
import { LinkContainer } from "react-router-bootstrap";

const Styles = styled.div`
  .jumbo {
    background: url(${tentImg}) no-repeat;
    background-size: cover;
    color: #000;
  }
`;

const HomeJumbotron = () => (
  <Styles>
    <Jumbotron className="jumbo">
      <h2>Hallo, Zeltfest-, Gartenfest-Liebhaber!</h2>
      <p>
        Bei uns können sie im Bereich Flensburg preiswert Zelte und
        Party-Equipment mieten.
      </p>
      <p>
        <LinkContainer to="/request">
          <Button variant="info">Wünschtermin anmelden!</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  </Styles>
);

export default HomeJumbotron;
