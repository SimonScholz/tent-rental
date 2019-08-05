import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imp1 from "../../assets/impression1.jpeg";
import imp2 from "../../assets/impression2.jpeg";
import imp3 from "../../assets/impression3.jpeg";

const Impressions: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel className="mt-3">
      <Carousel.Item>
        <img className="d-block w-100" src={imp1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imp2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imp3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Impressions;
