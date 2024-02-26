// Sidebar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsGem, BsPeople, BsNewspaper } from "react-icons/bs";

const Sidebar = () => {
  const [showCommoditiesSubMenu, setShowCommoditiesSubMenu] = useState(false);

  const handleCommoditiesHover = () => {
    setShowCommoditiesSubMenu(true);
  };

  const handleCommoditiesLeave = () => {
    setShowCommoditiesSubMenu(false);
  };

  return (
    <div className="md:block hidden w-1/5 min-h-screen p-4 font-light">
      <ul>
        <li className="mb-2">
          <Link to="/dashboard">
            <BsHouseDoor className="inline mr-2" />
            Dashboard
          </Link>
        </li>
        <li
          className="mb-2 relative"
          onMouseEnter={handleCommoditiesHover}
          onMouseLeave={handleCommoditiesLeave}
        >
          <BsGem className="inline mr-2" />
          Commodities
          {showCommoditiesSubMenu && (
            <ul className="ml-12 mb-2">
              <li>
                <Link to="/commodities/crude-oil-wti">- Crude Oil(WTI)</Link>
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
        </li>

        <>
          <li className="mb-2">
            <Link
              to="/premium-articles"
              className="transition duration-300 transform translate-y-2"
            >
              <BsNewspaper className="inline mr-2" />
              Premium Articles
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/partners"
              className="transition duration-300 transform translate-y-2"
            >
              <BsPeople className="inline mr-2" />
              Partners
            </Link>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Sidebar;
