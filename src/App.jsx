import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import Headers from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

import Home from './pages/Home';
import CardDetail from './pages/CardDetail';
import Collection from './pages/Collection';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
    return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Headers />
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<h2>About Page</h2>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/card" element={<Card />} />
            <Route path="/card-detail/:id" element={<CardDetail />} />
            <Route path="/card-detail" element={<CardDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}


export default App