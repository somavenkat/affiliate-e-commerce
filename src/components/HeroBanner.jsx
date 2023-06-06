import React from "react";
import { Carousel, Container } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <>
      <section className="">
        {/* <Container> */}
        <Carousel
          style={{
            maxHeight: "270px",
            overflow: "hidden",
            marginTop: "72px",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/JuneWRS/updated/WRS-Skincare-PC-99._CB587560940_.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GWCMLJUNEWRS/CML_PC_3000_00004._CB587723779_.jpg"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/JuneWRS/updated/WRS-Makeup-PC._CB587559966_.jpg"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        {/* </Container> */}
      </section>
    </>
  );
};

export default HeroBanner;
