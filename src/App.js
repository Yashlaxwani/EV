import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;