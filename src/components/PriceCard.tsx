import React from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Container, Button } from "react-bootstrap";

const Styles = styled.div`
  .pricing .card {
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  }

  .pricing hr {
    margin: 1.5rem 0;
  }

  .pricing .card-title {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  .pricing .card-price {
    font-size: 3rem;
    margin: 0;
  }

  .pricing .card-price .period {
    font-size: 0.8rem;
  }

  .pricing ul li {
    margin-bottom: 1rem;
  }

  .pricing .text-muted {
    opacity: 0.7;
  }

  .pricing .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 0.7;
    transition: all 0.2s;
  }

  /* Hover Effects on Card */
  @media (min-width: 992px) {
    .pricing .card:hover {
      margin-top: -0.25rem;
      margin-bottom: 0.25rem;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    }
    .pricing .card:hover .btn {
      opacity: 1;
    }
  }
`;

interface PriceCardProps {
  name: string;
  price: number;
  currency?: string;
  items: Array<String>;
}

const PriceCard: React.FC<PriceCardProps> = props => {
  const { name, price, currency = "€", items } = props;

  return (
    <Styles>
      <Container className="pricing">
        <Card className="mb-5 mb-lg-0">
          <Card.Body>
            <h5 className="card-title text-muted text-uppercase text-center">
              {name}
            </h5>
            <h6 className="card-price text-center">
              {price} {currency}
            </h6>
            <hr />
            <ul className="fa-ul">
              {items.map((item, i) => (
                <li key={i}>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <LinkContainer to="/request">
              <Button className="btn btn-block btn-info text-uppercase">
                Buchen
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Container>
    </Styles>
  );
};

export default PriceCard;
