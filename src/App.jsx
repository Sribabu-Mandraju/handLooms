import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:categoryId" element={<ProductListing />} />
      </Routes>
    </Router>
  )
}

export default App