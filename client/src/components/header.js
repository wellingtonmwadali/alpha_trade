//header section

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // Import React Icons

import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md font-light p-4 flex justify-between items-center">
      {/* Logo with link to home */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12" />
      </Link>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 gap-10 ">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/news" className="">
          News
        </Link>
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/login">Login</Link>
        <Link
          to="/signup"
          className="bg-slate-200 hover:bg-slate-300 rounded-full w-24 h-8 text-center font-normal"
        >
          Sign Up
        </Link>
      </nav>

      {/* Mobile Menu Icon (Toggle visibility of the menu) */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black">
          <AiOutlineMenu size={24} />
        </button>

        {/* Mobile Menu Content */}
        {/* This part will be visible when the button is clicked */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 z-50 bg-slate-100 left-1 right-1  p-9 space-y-5 ">
            <Link
              to="/"
              className="block border-b border-slate-200 p-5 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to="/news"
              className="block border-b border-slate-200 p-5 hover:text-green-700"
            >
              News
            </Link>
            <Link
              to="/about"
              className="block border-b border-slate-200 p-5 hover:text-green-700"
            >
              About
            </Link>
            <Link
              to="/login"
              className="block border-b border-slate-200 p-5 hover:text-green-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block p-3 text-center bg-slate-200 hover:bg-slate-300 rounded-full  "
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
