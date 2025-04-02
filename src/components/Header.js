import React, { useContext, useEffect, useState } from "react";
import LogoDark from "../assets/img/logo-dark.svg";

import LogoWhite from "../assets/img/logo-white.svg";
import { HotelContext } from "../context/HotelContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-y-6 lg:justify-between lg:gap-y-0">
        {/* Logo */}
        <Link to="/">
          <img className="w-[160px]" src={`${header ? LogoDark : LogoWhite}`} />
        </Link>
        {/* nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <Link to={"/"} className="hover:text-accent transition">
            Home
          </Link>
          <Link to={"/"} className="hover:text-accent transition">
            Rooms
          </Link>
          <Link to={"/"} className="hover:text-accent transition">
            Restaurant
          </Link>
          <Link to={"/"} className="hover:text-accent transition">
            Spa
          </Link>
          <Link to={"/"} className="hover:text-accent transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
