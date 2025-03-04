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
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./Pages/NotFound";
import TrackOrder from "./Pages/TrackOrder";
import PaymentMethod from "./Pages/checkout/PaymentMethod";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryId" element={<ProductListing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
