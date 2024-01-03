//header section

import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="shadow-md font-medium  p-4 flex justify-between items-center ">
      {/* Logo with link to home */}
      <BrowserRouter>
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12" />
      </Link>
      
      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 gap-10 font-Helvetica">
        <Link to="/" className="">Home</Link>
        <Link to="/commodities" className="">Commodities</Link>
        <Link to="/news" className="">News</Link>
        <Link to="/premium-articles" className="">Premium articles</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup" className='bg-slate-200 hover:bg-slate-300 rounded-full w-24 h-7 text-center font-normal'>Sign Up</Link>
      </nav>

      
      <div className="md:hidden">
        {/* Mobile Menu Icon (Toggle visibility of the menu) */}
        <button className="text-white">&#9776;</button>
        
        {/* Mobile Menu Content */}
        {/* This part will be visible when the button is clicked */}
        <div className="hidden absolute top-16 right-0 bg-gray-700 text-white p-4 space-y-2">
          <Link to="/" className="block">HOME</Link>
          <Link to="/commodities" className="block">COMMODITIES</Link>
          <Link to="/news" className="block">NEWS</Link>
          <Link to="/premium-articles" className="block">PREMIUM ARTICLES</Link>
          <Link to="/signin" className="block">Sign In</Link>
          <Link to="/signup" className="block">Sign Up</Link>
        </div>
      </div>
     
      </BrowserRouter>
    </div>
    
  );
};

export default Header;
