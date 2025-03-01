import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import ProductCard from "./components/shared/ProductCard";
import Cart from "./Pages/cart/Cart";
import Checkout from "./Pages/checkout/Checkout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryId" element={<ProductListing />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
