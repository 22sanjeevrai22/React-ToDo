import React, { useState } from "react";
import navMenu from "../constants/navMenu";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../constants/routes";
import Colon from "./svgs/colon";
import orangeStore from "../assets/img/orangeStore.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-bold"
      : "text-gray-500 hover:text-gray-700";

  return (
    <>
      <div className="bg-slate-50 shadow-md">
        <nav className="max-w-[1200px] m-auto relative p-3 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="#">
            <img src={orangeStore} className="h-16 w-auto" alt="orangeStore" />
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarHidden(false)}
              className="navbar-burger flex items-center text-gray-400 hover:text-gray-500 text-xl p-3 cursor-pointer"
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {navMenu.map((menu, index) => (
              <>
                <li key={menu.route}>
                  <NavLink to={menu.route} className={navLinkClass}>
                    {menu.label}
                  </NavLink>
                </li>
                {index !== navMenu.length - 1 && (
                  <li key={index} className="text-gray-300 ml-4">
                    <Colon />
                  </li>
                )}
              </>
            ))}
          </ul>
          <NavLink
            to={LOGIN_ROUTE}
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          >
            Login
          </NavLink>
          <NavLink
            to={REGISTER_ROUTE}
            className="hidden lg:inline-block py-2 px-6 bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            Register
          </NavLink>
        </nav>
        <Sidebar
          navMenu={navMenu}
          isSidebarHidden={isSidebarHidden}
          setIsSidebarHidden={setIsSidebarHidden}
        />
      </div>
    </>
  );
};

export default Navbar;