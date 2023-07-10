/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Products from "./components/Products";
import { getProducts } from "./components/services/services";

function App() {
  const loadOnce = useRef(true);
  const [allProducts, setAllProducts] = useState();
  // eslint-disable-next-line no-unused-vars
  const [amazonData, setAmazonData] = useState([
    {
      name: "SeoulCeuticals Korean",
      price: "$16.50",
      link: "https://www.amazon.com/dp/B08Z7YLNQ3?_encoding=UTF8&linkCode=r02&tag=socalleddeals-20&linkId=amzn1.deals-promotions.ATVPDKIKX0DER.b28aae74_1685661088118&ref_=ihub_rc_td_c_deals-promotions_b28aae74",
      date: "Jun 05, 2023, 01:45 AM",
      offer: "(34% off)",
      image:
        "https://m.media-amazon.com/images/I/51LFe0HTUnL._SY500_._AC_UL300_SR300,300_.jpg",
    },
    {
      name: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C",
      price: "$16.50",
      link: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid Provides Potent Anti Aging  Anti Wrinkle Korean Beauty 1oz",
      date: "Jun 05, 2023, 01:45 AM",
      offer: "(34% off)",
      image:
        "https://m.media-amazon.com/images/I/31MNjMjnD6L._AC_UL300_SR300,300_.jpg",
    },
    {
      name: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C",
      price: "$16.50",
      link: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid Provides Potent Anti Aging  Anti Wrinkle Korean Beauty 1oz",
      date: "Jun 05, 2023, 01:45 AM",
      offer: "(34% off)",
      image:
        "https://m.media-amazon.com/images/I/51NzV8817UL._SY500_._AC_UL300_SR300,300_.jpg",
    },
    {
      name: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C",
      price: "$16.50",
      link: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid Provides Potent Anti Aging  Anti Wrinkle Korean Beauty 1oz",
      date: "Jun 05, 2023, 01:45 AM",
      offer: "(34% off)",
      image:
        "https://m.media-amazon.com/images/I/41Ba15SIHqL._AC_UL300_SR300,300_.jpg",
    },
    {
      name: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C",
      price: "$16.50",
      link: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid Provides Potent Anti Aging  Anti Wrinkle Korean Beauty 1oz",
      date: "Jun 05, 2023, 01:45 AM",
      offer: "(34% off)",
      image:
        "https://m.media-amazon.com/images/I/41HqahXl3jL._SY500_._AC_UL300_SR300,300_.jpg",
    },
  ]);

  const getList = async () => {
    const products = await getProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    if (loadOnce.current) {
      loadOnce.current = false;
      getList();
    }
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <div className="p-3">
        <h4 className="mx-5">Top Deals</h4>
        <Container>
          <Row>
            {Array.from({ length: 6 }, () => (
              <Col className="text-dark g-2" key={1} lg={2} md={4} sm={6}>
                <Card>
                  <Card.Img
                    className="h-50"
                    // style={{ maxHeight: "150px" }}
                    variant="top"
                    src={amazonData[0].image}
                  />
                  <Card.Body className="bg-light">
                    <Card.Title>{amazonData[0].price}</Card.Title>
                    <p>
                      List: <del className="">{amazonData[0].price}</del>
                      <span>${amazonData[0].offer}</span>
                    </p>
                    <a
                      href={amazonData[0].link}
                      target="_blank"
                      className="mb-2"
                      rel="noreferrer"
                    >
                      {amazonData[0].name}
                    </a>
                    <p>{amazonData[0].date}</p>
                    <Card.Text>Some quick example</Card.Text>
                    {/* <Button variant="primary">Get Link</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <>
        <Container>
          <Row>
            <Col md={3}>
              <h5 className="my-3 mx-0 px-0">Filters</h5>
            </Col>
            <Col md={9}>
              <h4>Search Deals</h4>
              <div>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    className="rounded"
                    placeholder="Search deals, coupons, stores and more..."
                  />
                </Form.Group>
              </div>
              <Row className="pb-5">
                {allProducts?.map((list, index) => (
                  <Col className="text-dark g-2" key={1} lg={3} md={4} sm={6}>
                    <Products
                      pageTitle="Amazon Top Deals"
                      key={index}
                      data={list}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>

      {/* <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Main st
                  Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555)
                  555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  socalleddeals@socalleddeals.test
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">socalleddeals Email:</span>
                  socalleddeals@info.com
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div id="map">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgVFRQZGRgaGxgZGRgbGxsaGRsbGxgaGxkaGRobIC0kGx0pHhoYJTclKS4wNDQ0GiM5PzkxPi0yNDABCwsLEA8QHhISHTIgICkyMjIyMjIyMjIyMjIyMjIyMjsyMjUyMjI1MjIyMjIyMjIyMjIyMjIyMjIyPjIyMjAyMP/AABEIALMBGQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUHBv/EAD4QAAEDAgMFBgUDAwIFBQAAAAEAAhEDIRIxQQQiUWFxBTKBkaGxE0JS0eEUwfBTcpJi4hUjM9LxQ4KDssL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAqEQACAgEDAgUEAwEAAAAAAAAAAQIRAxIhMQRBEyIyUWEUcYGhBZHBI//aAAwDAQACEQMRAD8A9ToU5MA4YGnlon1NmeWluOJBE4ZiRE3KrZWQ43Btoea4zR2kwOJNN5hga22hqOe6wbvHExkTG4DqVEisezsNzRDa2Ew4NhpgS6ZgvJNi4XOoOi2t2KoAR8QHgSy8Wz3oJjFeBci1oLdhNUsaaoAfJkNyiThm5vhwzBImYSa36jE7BEEiMUWEGYAvwz6RqlEsa3ZHRd4J1hpA52xGER2Q/V6flIYK5IktAxGQAO7AibmT0jyTtkFWD8TDk2IGsbxJnjyHilItnMotaajoxhwkmS0NOKMmg4o5uGgvDWga1z+yQSHPN8RG9hLZzcSJu5sukE8SLABdBZZSw2xPCPVLLBwCd8nV3sPugWZRT2asqYs0xxI/nNcztPst9R2JuAj4bmb5IguPeENNwu3RzJ4AlKC5fTY7tJJ/Ak3JaWzjbH2bUZUD3NpgAP7hMnG4OAgtFhB811DibBuJGk5c4TXTFs9JynSVl7PYQDvhwMXbUfUE3JguMfNoG9AIXHJ0UZPVbTLCWlaUtiyAft+PAeSNpIyPhA6pxE5ofhjhHSy4fR5oeiZ18SL5QAfyF+FkdSo0uJw2tFhw5eKo0+fmq+GeSaurh2UhWN/AQqDj+yczuuPQeZusz2EEgjLhcKshqAeoEq/XTj64NDwk/Sx6iQCeJ9/dWHnkukf5HE+bRl4WPdTBbJ4x4R91kLS0zmFoNbdAg6z45IXVBBn1C6+Nin6ZKznLHL2KHFviP5kUdOpNwcv5dZGPi4T2uDrizvf7rtDIpc8mFKzUWh1xY6jjzCS9shUx+mRH8kI1qUVJUzadGN7dR4j+aoFpqt18/ukPbHRfJjqwz8KXHZm8kFKOqPPcFRRRes8pFFFEBFFFEB0qDiHWGl/BGNsd9A/y/C5rjXxSBDZLXHdu0nddeYiIy1npKG2Oc5rTSc3FFyRAlpdebgQD4gjNe3c7HS/Vu+kef4S3bbUizGzJsXkCLwZDDytzWbZ9pD3FoaZ3iIgghuG8jiHtI4gyJWggjMEdQlsUNp7Y6BiaAdRMjzS9s23C0kxB3dczYac+pyEmAhTKHengCfT8q2SjF2TQcKTbAnemCdHFt8RkmALrWWEZg+SABG15GRPmoUt+TRyJ8z+ECZ8U6weo+yrG3Vvkf2QEZ3Xc4H39ECbLYiSLzcTpGilHZy5uLHnOnMjilAy7S+GPPBrjYYtOGvRK7NB+GyXF0iQ4mSQTb0iwtw4rZX7OxgAvIAMmBEiCIN+fgQCLhHT2AhoGMmABJFzAiTfNWhYpRaf0Z+v0/Kn6M/X6flSmLE09TwafPRSkJcOvtdO/SGCMecacPFV+iP1+n5VoliDck8ST5rNV2oB7acDriE3aXd3PSFv/AEZ+v0/KJ+ykmcWgGXDxVVb2rMyt1TrcxmmOH7eygoSCQSIjnmea1/oz9fp+Vf6QwRjzjTh4rjLp4S5in+DqsjXDMJpniPZUWnh5XW79Gfq9PykP7N3sWN1hlcNtMSA4A3JN+S80/wCPxS4VfY0szRjLQf5BQlpHP3WloDgCRolucwHBjbjsQ0kB5Bm4E3yPkvJLps2HeDtexpuE+VTFsrtdYkSJuMxBg+tloa+LHwOhWRmytBJkyZtYRJk5CT4ymCRY3avVHrcd6bf5OSxzSt/o1pDmRbQ5fZWx8DOW8dR1TbEcQuvUYI5ofPZmoS0sxObHTj91S0OZFsx/LFKFI6LxYZyUvDmt1+yZcarVHgBRE5hGYQr01R5yKKKIA24nVSQ9paDhc1rySA1p7zA6GuDzBsSRww32LDsD8VWo/eIG7hc0sAJdJwtPSS7UmLEELo4m/SR0M+69rOwprALgAG9wIN7m/OB5Jrajh8x9/dTC36iOo/cKxSOhaehQE+JxDT1F1A4YXENiwGZOZQuY4Zg+/srNmdXegH3QAKKKKAiiiiAi2bD/ANMePuVjWzYf+mPH3K1EjPl3v7Sp0jiHxCQ4uIguE0mBoaGQ4n4mPLLoujg2sUy0ycNXCC0sFR9ENhrpfLQ/FhmcwHWEgDSO1xEkCxM4XYoDQ0uJOGLB02nLNSr2uWi7N7EWkYrDeLQZDSSCQ7T5XcFohmc7b5cAKYAnCYBJ72H5hpgJJA3sQiIKmyO281Gio2m1mJuJwgktDCXWxWcXgDWA4RkVqp9rSJwiAwPIDpfcNJGEgfXYzeEVTtVrXNBa7C8U8JGGSahIHzZCBfmgOoouUe2KYmZAAJxHCBAEzd0wZEEiLwqrdsNZcsfG9lhJs5jRADtcc/myA6yi51XtINc5pa62oiLtxCcRETccBFyEpvbTd0YXFzsMBpYbuAIE4o1zysboDrKLl1u1mtw7pgsa83bMOyAGKSeeXNEztRpeGYH4tbNgb2EycUWubcONkBq2qmXMLQYJi/C4MiNeHNVs9ItaATJE3ve5MmdTrzWlC7JAcij3W9Aksg1DBfI3iJaGHcDbNBxEQ4XIiW2IyOikwhrbHIaLF2bDnPeMMF0Atm8F0ySN75byQJIFlg0bXNBzS3UyMr+6cic2I5gE+K4ZenhlW6/Pc3Gco8GQcRY/zMK2G9rH6dD0TXsnrxSS2c7H2Xz/APp0kubizr5ci9mMe8EHiNNc1VPPwPuEkvkQ4XtfxTWvg34H9luc4y6iEo+xmPoYyoyQsa3ApNSjqPJe7JC90eaS7mdRExhOQTPgHkuOmXsYpi+x+4S6HS4wWuPdGQFyIBLogkXXQhnFw6ifZYtupuawNoAghxGYdbC6O+csQYOQyS/1j/6RHdF8QEuwg3wxDSYJmNRK9h2Ol8Pg5p9FTqTvp/dYKXaNNxiSOotoMxaxOHqtFDaWG4e2BBdeMIsd76bcUBoquIMAmwAz5INp2lzcIsZEmROeSpzw64IIORFwQciD5JG3GXkcIHos5JaVZmTpBjaxrTHgYRCvTP1DyIWJqi4eLJGNTOgCw5VB4yPdF8J2kHoQuaoTC0svwa1m94LQSRAAJJOQAzJK2bD3B4+5XMoA1Gva5zsJY4G/ERafFdLYpwCTJvJMSbm5gAei7wd7mrspm1sOsf3AtmYuJAkXzRO2qnq5t+c5mPdIHZw+t5sRfCbERF25cuqFvZgAgPeBwlsZzPdz55rrsYuRp/U08sTdRmNM/JNY4EAiCNCsY7OH9R/m3iDA3bCRkFpoUQxoaCSBxzznRR0FfcdChCtRQ0UpCtRAVCkK1EBELskSF2SA5FOoQwbzhYZBzyOYYAZ8kvsxnw2FsAy55uwUyd6AS0AXgC5ubLRsWQPBs+n5R/GdFzPUBYNExN1b5H9kTgHEkGLajQdFKhaDGEeBj2VDDhcROgvGp0QFfD4OafFJ2imRBI/n/n3RoXNkELjnxrJBxfc1CWl2ZKo1/nJGXWkeXLUKPFvVLa6Oi+HBSpNcxf6O8nFOnwx7Dq3xbp4cExlQG2R4LPGoP2TGvDrOEH+ZL63T9XHJs9mcZY3H7D1EreHMev5Q/qmcfReswasLfqI6ifZQU+Dmnxg+SgYDk8eMhc7Z+0qbwJOEkSAQZjAKk5fSfQxKoN1XZpBDmAgyDIBmbFKp7GyHNAwjCZjgItDpGg0vCg2lgbiDwG8Q4AZkf/l3+J4LU15LXSZyHmboBOwUQzdABkyXES4nCBJdqYaLrFVfLieJJ9V0WGA48GnzOX7rmQVyyPszEip4IgUJlVK5abWxmgp4KEKwQqesrkhs2NsMceJaPK5TaW0OaA0MBib4ozM5QVVMQxo4ku/ZReqOyR1S2Gfrn/0x/n/tU/XP/pj/AD/2pai1bLQz9c/+mP8AP/ap+uf/AEx/n/tS1Etihh25/wDTH+f+1P2TaQ5mMjDniEzBBg38FkWKrVAc6kHtHxC2RiGIaOtMnEICahV8HQp9oOIB+HEgEb14OU2zTW7W42DRP9x/7Umr3j5eQhFRzngCfT8q2Shn6l+jGH/5L/8A1VHaao/9If5z7NWeETeVuilloa/bHjOmMh8/+1Q7W+B/yxefm4W+lVUquxGDacrKjUnNoPmFbJQNBgDTJiwbMT1/ZWKYkbzcxyPkj3cIzEknjlbXRcs7cWgF1N0YGuccLhBLoc0Ai5Et6gngoU6VSm6SYOfXoqIhvV0+Qhc+j2kwiScFyMwZh5bm2xym021Wt+1MIacYIIMHMaZnSJaJPEIAlFQcDkZUIUAqoZMREQOsWn0SC0jTog7c7P8AiPYQ1rgzHLXEjvht7NOVz1hZux+x3NqU3kUxgkuIJkzSw5YAO9vZ2lfN8NQzvfnt/pZSlJJVsu52dn2LdJdYnIcOZSKjYJEzGv2W2tWmwy1Op+wSC0Gy75+jjNXHaXuahka2e6AY/Q+f81RwkvZHT1CvG7j6LhHqni8mVW13OmhS3RqFI6EHoUitsrXd6mDzi9iCLjmB5BPdQ5jxspgeOPgZ9F9M4GJuyMDCwEgF2KxEzpFrQIiLiAc7rVQYGMa0ARLtANSSbaySiNV2sH+4K6x7totMDn/4QA13D4boESQM55rnFbNqMMaOLifKyxSvPktyOcuRJY+LVCPAO+qLukn5QcstFQbUjvgG3ygxxEwJGnryTnSriFFIC3Uzo82xRkBcnvAZwMI8FVNjgbvndAO6BvBxOIRla38s1hRUWy8DmB6qJu6IdJzWgNaZBDQLRCgpg5OB6ghVVMuPX2t+yjMnHlHmYXqOoNQYRJykCxBuSAPUjzSWbQx0YXtM5AETnGWehRuoNeQHNa6+oB6xKz1OzaRBaGkDfEhzp3nNJIJJvLGnw6oDVCiyt7PAY4A97A0BwkDCJJ5zwy5G4L9jp4W4XS44jBBORMNAByAEWk6oC3zBjODHWLLzKrXrfFaIaaZBL3O7+O+d85jTivUnNbJGIjqJ9l8ztvZLHba0SCwtdUe0fUwhpBGkuc3rvLjmg3VH0OgzQhq1e1/12Oz2Y5xpUy+cRaCZzuMzz4razuuPIDzN0Db5AnwWbDU+KTMMkAjFazJEtJ3TJ0FxH073VI8MnbbNKOiN4dfa6BKq7WKZG6XEyLFggmzZxubnvZfSeCIyNmb8b+aiikIA6nyj/SPVAjrHePl5BAgF1KLXd5rSZBBIBMiYIkZiT5lBV2JkCmJDWWaASMxc/wB0k35kZEg6aQlwHP2uqJkk8SSqC2vIAFiBYAgZeCJrgSIaJm1zHklp2yN3p4D3P4KIGj4QANpmZ4lcm4ztGYW7aHnERJAECxI0nRZKpMybzqvB18WlHJHlM64Xyn3GqJVN2nl9k1erFljkipIxKLi6ZEPwxwCJRbcU+UZsNtRw+Y+/urFY8B7HzCWorYHjaBqD5g+6svYc48QR6rOibTLsh46ea1YC2imwwDNhaDIv1zySBsQPcfPIghadohpEtJxGBEQLWkk6xA5kLG/bHOcPhWZlYCMw4uBNgQ0ARGdS/dKzKCfJlpMh2B/AeYQP2R4zafC/srrB7mBryHOnFJmJwkWERAnKPI3GvZdpwth0ky4zM5uJAveADCw4R4saTmuZGkdU/s9u/PCT6fldUbQx2o8be6sUWXIAuIkcPBFj3u7JRhCP5OrvQD7rQ7ZBoT7oamzmAARYdM10o3Yqj3p4An0/KUE9tFwDraQNczdJdbO3WyAuu/DTk6B7j4fhZqW2sxZGQTIjLDiLvEBsxY3Gtlrq6Dg0KmNFzFwDB5mw9z5oDM7a2+Ya7MTvlwaACbmWnp5xX6+mbwS42DgwyRiE884OQT4+3hwTHd1vOT62UKKpPkBwkAgEaGDcLJsoJqvqYic2icXyuc2Ae6Ww2Yk3MkNK01qga1ziQA0Ey44W2GpgwOcLJ2O7Ex1SAC9xmCXC2ocQJzOQA5C6pDpfE4tafCD5rHXqNNVjcAuLnCXEXJAxlwDO4bXmMrLSsFMl1d+RDWtAMGQYOISRYnE07pEjOdAOlhb9RHUT7IqdO43mm82N7ckpMoC55AoCnU3SThOZ568kBTBScMgfA/ZT4jhmT4j7oCqWp4NJ8dP3QBAduaH/AAyyS6LgtAnMgy7FIEGw+YcU6WcHDoZ90AC07EO8eYHkJ/dJwDR48QR6rVRGFs21Nsv5CIjMbjJJ5n3shc2bKNCtZaTVM0Z3Nix8+P5RsqRn5/dMcJSnNjpx+6+Zkwz6eWvFvHujupRmqfI5RJY6Ont0R/EbxXsxdXCcbujlLFJMJuSNjC7IeOi1/BY3OPE/dQbQ3IH0ML1Uc7OftGztfDGvbiBki5sAQRAINsQ9Fro1GsDaeLEQA23IRJ4LE7ZAXuf8QAmbDK8Tz0Tdm2drXYsQMAmI5Kzm9kuDnFO22t/8GV6hdIOQOXQ2PmJS1m2mpUD4YMQwgjdIk7+LeNgRDLHPEfBXxa5sKbW5XMEAY4Lu/wDRBw/6s92Dk6ml5Qpb6dQuBuBukiW8W4mjObYrwNLmYGj4a5Sg27NJi0+m4YYBE4rwbjdsDwORQhgWPY2ML3PDiXDE1wLYLS5wOHFcHDhIseAtACsItbsjZtqbQWtLpNhlYk8AMRiSYA5kJtPb8QxNjDpPKxuDGcjwWPbnRTccOPKGfUcQwgc5iMr6jNFsj2uYHNAAMmAcQEuJInrNtMl0sh0RtNgSMyRbkibtDTa48Pssr8mjlPmfws21NeQAwwcQvOEgC8g9Q0HkSrZKOqWscdCfVCdnbBAkTGvDqudRxYW4+9ALpjvG7srZzktBJDWgEjM262SxQ12y8HeY/dDVoG0CYAH8lCNoIzNtZGmuSlHtFr5w3AMTcaA6jmqlautiOSTq9zPRrAvwCcQJJEH5SJv4hMc6Sep902k2mHF4BBi5knvEZCdSBpotGNjsyD1/KrS7EV9zA4xf8+iw9niXvdia4OwubDsWHFLiDBLQcsifae4dmadI6FDV2aTIMeCzRqzIjb3XH+0et1mqve2oGYQZi99cU+ULZDmtyMkmbTpCri1RFNO67C6Q3hHEIjWdJg6lRtaD3Wz0gqhhOjh0IPusmjGytiqncYQBvODCN4CAC8GC4B0YYsDM6La0NOhFibGcuq5fZha973y0GATniGK5a6WjDBbl1zzXWZTMOiDaBB45oAMLfqI6j7LTWGGnHID2CyOYcoN7ZcbLTtpsBz9gfwqiGVRRRZKRRQCcrpjdncdI6oDM6nGXl9vsud/xWj9Tv8H/APau+3ZeJ8vys3/Adn+j1K8z/j8E23JNfZiWbKq0V+SoVqKL0giOlmeh9kCOi7eHX3sgAUR/BdkAf51U+HxLR438koAKI4b9RPQR7qYm6N8z+yATUeGgk6aDM8ABqSbeKx9ks3XOMS5xJMME6/ISCN48Jzi66Y3jhLW4TYjCII1BBzQhwGTWxJMRxPJUHP7VZia0cXZS/Dke+GZiYiYE4eN9bGBrQ0aCLAD0CHaNlpvIc5pBGrXdRkbZOdzutZpAQcVrG48YsgBr96OED0XL7UeDgpi7icQGF7osWgnCCAN75rQHcF1HMkkgtMnjdc6ts1Q12ktf8Nv9mCYmW4JeTIAIdAtbgQNpR1s44AD0n90LBJA5hR5kk8yoAqTQTfKDPSEijRDBAm9zJJvAGZJ4BNxhrXEmJho5k6DwCBjwQCDIIBB4g5Fa8yXwZ8rl8jR3DzIHkJSyeOWqNzhDQOZPjBHooxmIwcjM+RUNFOdJLhr5pjKjg0mTmAJvzOfJKlG7ut5knysgGN2o6wUjtOo8tGCQczBjMGL9UFScJwxigxOUxabjXmPBBsrHgEPJJBgEnEcOERva3xXOcTbJaUmnZmUU1R0W12kAOz1kIjRYbQPAx6BY2CSBzCjzJJ5lSy0a6mzg6kWjiFztno1S4hwsC+CQ0A727EEnu8U4OIyJHimDaHDWeo+yqkkmqMyi2074DpU3hwzjW9vKUe0Ui4iIgA+sfZXQrFxggZSl1NodJAiBbmptRotuy8XeSaKLBmB4/lZHVXH5j7eyBS0U6DarcgR4JDts4Dz/AAk0jDh197fulm1uFlbJQ120OOsdEON31O8ygBVqWUZ8I6wOpVYW6unoP3KWArUAeNujfMz6KCq6QJi4sBGqBMoDeHn6KgGqZcepQozSdw/dAbZ262UBFFFEAdLU8Gnz0QI2913MgeV0CAkTbjbzT9oNurj6CEuiN4efkJV1jl0nzMqgWVbXEZEjxVKKAYKzuM9QqxjVg8CQgUQCtqa0U94u74jDc/T5XKLZWg024SIwgAOO8IEXzumV2Ata1wBESQRIuZyPRC1oAgCAMgMl0clpo5qD1X8Bmg5vEjj+ytgjEcoac7ZoBbK3SyMVXD5j7+6wdAEdXQcGjz1UL5za0+EHzVuc1xkgg8oI9UBj28j4b5yIwnP5t2LXm8K9hH/LZEXGKwicW9McbpXbLHGnuFx3mzhacQE5iCCDMXERe4st/wAF2l+hn3QF0c54An0/KUEI2loLmk4T3RNg64Dg06wSAia4G4IPS/H7FAWooooBuzmMTuDT+PZKTG2YebgPAX+6WqCKKiUTWk5Anw/dQAPNkztjtH4FMPFNzrtEAWEuAudM7c4Rfp3awPG62xaIBFlqJGZa78TGOgiSDDhDhLTYjQpMIu1qJexoDi3ezaTMYHDlxWf9JS/pN9fujCGqLHttXC6HvLG4ZaS7AHPkyC8i0DCQNcRzhLp9oEua0sgkDdLt8gtLsQZhEttc2uTYRBso6YqT4LC5NpdtzoLNtO0vYRhGYMksLhBsIOJsGes2AuUva9v+G2Ybk4yXQ04Wg4Q7Dd5mwjQ9Fko9oOdWZTM3L5OMttjqYQGiA+AwC82PnhPyqXZ8FScpOK5StnYyysjFVw+Y+/ugUQgfxOLWnwg+amJv0kdDPugUQDXNbhG8RJJuJytoh+Hwc0+MKVPlHBo8zmgVAVSWNc4jJpAAIu4kBoHMmB4pVPaRUHxILW3iS3JtiZaSIsdUO21MFF7sOK7Rhw45uLYdc1Y3qZbGFr2ulsR35LrEWzKAYosDtgdeKjiCWktMjTfMti7jLjkJcVeGuGNkhzxjLi3CGm8sEEDS32s5oG5UUTGiBLrwJ3bTrkbI2U7jeabjI38lKBK/ejhA9EtHUY6SYOZ5+yXKAtRRU5wEEkCTAnjwQFqIWVGOgte0yJG8LiAZ8iD4oWV6ZiKjL5DEJNwLDqR5jirQCqUGuEmZloEOc3I4oIaRiHIyFcIXbUyIxCxdizsR4eHWyptZhIAcJJAGeZbiGnC6UCn7FTcJcwEh0iZMGCTA0nEZ4ys1XYGiC1zmkAgRFrECNREnIzc3W6nWYWnfbHeBJjKATfS4vzCW5zScIe0uGk9bdd025JuDKym4B++50iBcjDl3TJIgTF5M3Oq07ACRhqOOIkREERhbbFmZIdc3uheA0gEgTPGLZyYgeKrE3+oz/IIDo1GAtg7oabTcHn6pUMGpd0sP54oNqrsxhmMTEATeZaDPA77Bf6kNNzXd1zTImxm38IVZBoqAd1rRzNyqNVxzcfC3slOqNDsJcA6AYNrEwL5Z6KnVWASajAOOIRnHuD5KblLcYvwv5XWzaqD3gBtV9OMy0UyTbI42uHksj3NyL2iSR3hnqOqa17MTTjEYYdvW5HPjZVEYdUFrWBxLyCAXOgEmDchoAnoAEHxP9DPJZmuGQqNOg351hN+G7iP54LLl8FSGGqQc/wB/dasAIyVKKoMz7TsjHNhwJ/8Ac7UXGeXLJczETtESYFMGJMTJExlkVFFt8GUblFFFzNEVOyUUQDa/ePh7BLUURgw9tVCKLCDBL8xY5uyIy8FspiABoABHRRRVgJRRRQETKHeHj7FRREBNJ5AzKds9Uusb+AUUVQHOpjh5W9lmNJrhDgCMWR/tP3UUWiAU+zaQeDgF2um5g2DcpjKyv/hNHvYLnDJl14ve/FRRAMPZ9Oe7mSTBImWxoeZ81Y2VlrZRFz8s4ZveIGaiiASOzqV9zR+p0O7rpkOAtkk7FsVOXVMIxh7wHagZQOStRCGmrs7HiHNBEOsUt3Z1IjDgEWtfp7KKIUa7Yqe87Dc5mT/pda9t69tUqjsVOm/ExgaYiRw4KlEAdXYqdTeewOMtEngHTCDZuz6WBhw3wm8mcuud/bgFFEAY2GnfcFy8nniaA7zgeSGn2VR32/DGHFkSSMgdTxAPgqUQDP0VMOBDQIFuWf3TFFFGD//Z"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2023 SoCalledDeals</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
