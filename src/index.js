import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from  './components/header/Header'
import { BrowserRouter } from 'react-router-dom';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
      <Cta />
    </BrowserRouter>
  </React.StrictMode>
);
