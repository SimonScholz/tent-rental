import React from "react";
import HomeJumbotron from "../HomeJumbotron";
import PriceCard from "../PriceCard";
import { Row, Col } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HomeJumbotron />
      <Row>
        <Col className="lg-4">
          <PriceCard
            price={500}
            name="Paket S"
            items={["Aufbau", "Abbau", "Tische", "Stühle", "10 qm Zelt"]}
          />
        </Col>
        <Col className="lg-4">
          <PriceCard
            price={1000}
            name="Paket M"
            items={["Aufbau", "Abbau", "Tische", "Stühle", "20 qm Zelt"]}
          />
        </Col>
        <Col className="lg-4">
          <PriceCard
            price={1500}
            name="Paket L"
            items={["Aufbau", "Abbau", "Tische", "Stühle", "30 qm Zelt"]}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
