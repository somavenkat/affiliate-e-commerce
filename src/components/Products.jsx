import React from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import imageAd1 from "../assets/ad1.png";
import imageAd2 from "../assets/ad2.png";
const Products = ({
  pageTitle,
  data: {
    imagePath,
    discount,
    listPrice,
    link,
    createdAt,
    price,
    title,
    description,
  },
}) => {
  const date = new Date(createdAt);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const ads = [
    {
      id: 2,
      title: "Ad ",
      description:
        "Pellentesque tincidunt elit vitae massa sagittis, at sodales ex vestibulum.",
      imageUrl: imageAd1,
    },
    {
      id: 2,
      title: "Ad ",
      description:
        "Pellentesque tincidunt elit vitae massa sagittis, at sodales ex vestibulum.",
      imageUrl: imageAd1,
    },
    // Add more ads as needed
  ];

  return (
    <>
      <section>
        {/* <h5 className="my-3 mx-0 px-0">Ads</h5>
              <div className="ad-container">
                {ads.map(({ title, description, imageUrl }, index) => (
                  <>
                    <div className="ad">
                      <img
                        src={imageUrl}
                        style={{ width: "100%" }}
                        alt={title}
                      />
                      <p>
                        {title} {index + 1}
                      </p>
                      <p>{description}</p>
                    </div>
                  </>
                ))}
              </div> */}

        <Card>
          <Card.Img
            style={{
              width: "200px",
              height: "100px",
              objectFit: "scale-down",
              marginLeft: "20px",
            }}
            variant="top"
            src={imagePath}
          />
          <Card.Body className="bg-light">
            <Card.Title>${price}</Card.Title>
            <p>
              List: <del className="">${listPrice}</del>
              <span>(${discount} Offer)</span>
            </p>
            <a
              href={link}
              target="_blank"
              className="mb-2 twoLineEllipsis"
              rel="noreferrer"
            >
              {title}
            </a>
            <p>{formattedDate}</p>
            <Card.Text className="twoLineEllipsis">{description}</Card.Text>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Products;
