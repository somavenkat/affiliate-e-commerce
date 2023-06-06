import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Products = ({ title, data }) => {
  return (
    <>
      <section className="p-5">
        <Container>
          <Row>
            <h3>Amazon Top Deals</h3>
            {/* <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Get Link</Button>
                </Card.Body>
              </Card> */}
            {data.map(({ name, price, link, date, offer, image }) => (
              <Col className="text-dark g-2" lg={3} md={4} sm={6}>
                <Card>
                  <Card.Img
                    className="h-50"
                    style={{ maxHeight: "150px" }}
                    variant="top"
                    src={image}
                  />
                  <Card.Body className="bg-light">
                    <Card.Title>{price}</Card.Title>
                    <p>
                      List: <del class="">{price}</del>
                      <span>${offer}</span>
                    </p>
                    <a
                      href={link}
                      target="_blank"
                      className="mb-2"
                      rel="noreferrer"
                    >
                      {name}
                    </a>
                    <p>{date}</p>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Get Link</Button>
                  </Card.Body>
                </Card>
                {/* <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{price}</Card.Title>
                    <div className="d-flex mb-1">
                      <p class="">List: </p>
                      <del class="">{price}</del>
                      <p class="">${offer}</p>
                    </div>
                    <a href={link} target="_blank" className="mb-2">
                      {name}
                    </a>
                    <Card.Text>{date}</Card.Text>
                    <div className="d-flex">
                      <Button variant="primary" size="small">
                        Get Link
                      </Button>
                    </div>
                  </Card.Body>
                </Card> */}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
