import React from "react";
import HomeJumbotron from "../src/components/HomeJumbotron";
import PriceCard from "../src/components/PriceCard";
import { Row, Col } from "react-bootstrap";
import Layout from "../src/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
