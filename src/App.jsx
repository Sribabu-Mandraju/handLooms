import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Favorites from "./Pages/Favorites";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/category/:categoryId"
                  element={<ProductListing />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<PaymentMethod />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
