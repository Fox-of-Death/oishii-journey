import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "location", link: "/Collection" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <header
        className="p-4 bg-[#ff68a7] text-white "
        style={{ boxShadow: "0 4px 6px #ff68a7" }}
      >
        <nav className="container mx-auto flex  items-center justify-between text-lg">
          <a
            href="/"
            className="flex items-center space-x-2 font-bold text-white"
          >
            <img src={Logo} alt="Logo" className="h-10" />
            <span>Oishii Journey</span>
          </a>

          <button className="block lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-3xl`}></i>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.link} className="hover:text-gray-200 transition-all hover:underline">
                {item.name}
              </Link>
            ))}
          </div>

          <nav className={`lg:hidden absolute left-0 top-0 sm:w-2/3 md:w-1/2 bg-[#ff68a7] text-white h-full z-50 transition-all duration-300 ease-in-out ${isMenuOpen? "translate-x-0 opacity-100": "-translate-x-full opacity-0 pointer-events-none"}`}>
            <div className="p-4">
              <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-white" >
                <img src="src/assets/img/Logo.png" alt="Logo" className="h-10" />
                <span>Oishii Journey</span>
              </a>
              <hr className="my-4" />
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block text-lg py-2 hover:text-gray-300 transition-all hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </nav>
      </header>
    </>
  );
};

export default Headers;
