import React from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <section>
        <Navbar
          bg="primary"
          expand="md"
          variant="dark"
          className="fixed-top p-3"
        >
          <Container>
            <Navbar.Brand href="#home">SoCalledDeals</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                {/* <Nav className="ms-md-auto"> */}
                <NavDropdown
                  title="Categories"
                  className="text-white"
                  id="basic-nav-dropdown bg-primary"
                  bg="dark"
                >
                  <div style={{ maxHeight: "300px", overflow: "auto" }}>
                    <NavDropdown.Item href="#action/3.2">
                      Popular Deals
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Apple
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Autos</NavDropdown.Item>
                    <NavDropdown.Item href="#">Babies & Kids</NavDropdown.Item>
                    <NavDropdown.Item href="#">Bags & Luggage</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Books & Magazines
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Computers</NavDropdown.Item>
                    <NavDropdown.Item href="#">Education</NavDropdown.Item>
                    <NavDropdown.Item href="#">Finance</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Flowers & Gifts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Health & Beauty
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Home & Home Improvement
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#">Occasions</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Office Supplies
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Other</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pets</NavDropdown.Item>
                    <NavDropdown.Item href="#">Phones</NavDropdown.Item>
                    <NavDropdown.Item href="#">Restaurants</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      View All Categories
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavDropdown title="Coupons" id="basic-nav-dropdown">
                  <div style={{ maxHeight: "300px", overflow: "auto" }}>
                    <NavDropdown.Item href="#action/3.2">
                      Amazon
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Walmart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">eBay</NavDropdown.Item>
                    <NavDropdown.Item href="#">Chewy</NavDropdown.Item>
                    <NavDropdown.Item href="#">Home Depot</NavDropdown.Item>
                    <NavDropdown.Item href="#">Lowe's</NavDropdown.Item>
                    <NavDropdown.Item href="#">Macy's</NavDropdown.Item>
                    <NavDropdown.Item href="#">Target</NavDropdown.Item>
                    <NavDropdown.Item href="#">Best Buy</NavDropdown.Item>
                    <NavDropdown.Item href="#">Dell</NavDropdown.Item>
                    <NavDropdown.Item href="#">HP</NavDropdown.Item>
                    <NavDropdown.Item href="#">Lenovo</NavDropdown.Item>
                    <NavDropdown.Item href="#">Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#">Occasions</NavDropdown.Item>
                    <NavDropdown.Item href="#">Adorama</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Advance Auto Parts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">American Eagle</NavDropdown.Item>
                    <NavDropdown.Item href="#">Audible</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      B&H Photo Video
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Finish Line</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Dick's Sporting Goods
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
                <Nav.Link href="#home">Communities</Nav.Link>
                <Nav.Link href="#deals">Personal Finance</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
