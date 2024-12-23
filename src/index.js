import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Heroimg from './Components/Heroimg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <App />
    <Nav />
    <Heroimg />
    <Footer />
  </BrowserRouter>

);
