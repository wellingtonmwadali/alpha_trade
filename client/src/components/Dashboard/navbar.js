//navbar for the Dahboard

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [showCommoditiesSubMenu, setShowCommoditiesSubMenu] = useState(false);

  // Function to handle click on Commodities
  const handleCommoditiesClick = () => {
    // Toggle the visibility of the Commodities sub-menu
    setShowCommoditiesSubMenu((prev) => !prev);
  };
  return (
    <>
      <div className=" font-light p-3 flex justify-between items-center  border-b border-slate-200">
        {/* Logo with link to home */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
        <div className="border-r border-slate-300 h-14  w-2/3"></div>
        <div className="md:flex hidden text-4xl">
          <MdAccountCircle />
        </div>
        {/* Navigation Menu */}
        <nav className="hidden md:flex mr-48">
          <Link to="/login" className="">
            Log out
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
            <div className="absolute top-20 left-1 right-1  p-9 space-y-5 bg-white ">
              <Link
                to="/"
                className="block border-b border-slate-200 p-5 hover:text-green-700"
              >
                Dashboard
              </Link>
              <div
                className="block p-5 border-b border-slate-200 hover:text-green-700"
                onClick={handleCommoditiesClick}
              >
                Commodities
              </div>
              {/* Sub-menu for Commodities */}
              {showCommoditiesSubMenu && (
                <ul className="ml-4 ">
                  <li>
                    <Link to="/commodities/crude-oil-wti">
                      - Crude Oil(WTI)
                    </Link>
                  </li>
                  <li>
                    <Link to="/commodities/crude-oil-brent">
                      - Crude Oil(Brent)
                    </Link>
                  </li>
                  <li>
                    <Link to="/commodities/copper">- Copper</Link>
                  </li>
                  <li>
                    <Link to="/commodities/aluminium">- Aluminium</Link>
                  </li>
                  <li>
                    <Link to="/commodities/natural-gas">- Natural Gas</Link>
                  </li>
                </ul>
              )}
              <Link
                to="/news"
                className="block border-b border-slate-200 p-5 hover:text-green-700"
              >
                Premium articles
              </Link>
              <Link
                to="/about"
                className="block border-b border-slate-200 p-5 hover:text-green-700"
              >
                Partners
              </Link>
              <Link
                to="/login"
                className="block border-b border-slate-200 p-5 hover:text-green-700"
              >
                Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
