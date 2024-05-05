import React, { useState } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const [val, setVal] = useState(0);
  let priceTag = [
    {
      sale: false,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      rate: "$40.00 - $80.00",
      price: "",
      prices: false,
    },
    {
      sale: true,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      rate: "$20.00",
      price: "$18.00",
      prices: true,
    },
    {
      sale: true,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      rate: "$50.00",
      price: "$25.00",
      prices: true,
    },
    {
      sale: false,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      rate: "$40.00",
      price: "",
      prices: false,
    },
    {
      sale: true,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      rate: "$50.00",
      price: "$25.00",
      prices: true,
    },
    {
      sale: false,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      rate: "$120.00 - $280.00",
      price: "",
      prices: false,
    },
    {
      sale: true,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      rate: "$20.00",
      price: "$18.00",
      prices: true,
    },
    {
      sale: false,
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      rate: "$40.00",
      price: "",
      prices: false,
    },
  ];
  return (
    <>
      <Navbar setVal={setVal} val={val} />
      <Header />
      <Product priceTag={priceTag} setVal={setVal} val={val} />
      <Footer />
    </>
  );
};

export default App;
