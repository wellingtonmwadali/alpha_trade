import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import News from './pages/news';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/userAccount/Dashboard';
import Partners from './pages/userAccount/partners';
import Wti from './pages/commodities/wti';
import Brent from './pages/commodities/brent';
import Copper from './pages/commodities/copper';
import Aluminium from './pages/commodities/aluminium';
import Gas from './pages/commodities/gas';
import PremiumArticles from './pages/userAccount/PremiumArticles';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/commodities/crude-oil-wti" element={<Wti />} />
        <Route path="/commodities/crude-oil-brent" element={<Brent />} />
        <Route path="/commodities/copper" element={<Copper />} />
        <Route path="/commodities/aluminium" element={<Aluminium />} />
        <Route path="/commodities/natural-gas" element={<Gas />} />
        <Route path="/premium-articles" element={<PremiumArticles />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
