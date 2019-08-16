import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url("../static/tent-lampignons.png") no-repeat;
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
        <Button variant="info">Wünschtermin anmelden!</Button>
      </p>
    </Jumbotron>
  </Styles>
);

export default HomeJumbotron;
