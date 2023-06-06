import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Products from "./components/Products";

function App() {
  const [amazonData, setAmazonData] = useState([
    {
      name: "SeoulCeuticals Korean Skin Care Korean Beauty - 20% Vitamin C Hyaluronic Acid Serum + CE Ferulic Acid Provides Potent Anti Aging  Anti Wrinkle Korean Beauty 1oz",
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
  return (
    <>
      <Header />
      <HeroBanner />
      <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button class="btn btn-dark btn-lg" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <Products title="Amazon Top Deals" data={amazonData} />
    </>
  );
}

export default App;
