import React, { useEffect, useState } from "react";
import LogoDark from "../assets/img/logo-dark.svg";

import LogoWhite from "../assets/img/logo-white.svg";
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
        <a href="/">
          <img className="w-[160px]" src={`${header ? LogoDark : LogoWhite}`} />
        </a>
        {/* nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <a href="" className="hover:text-accent transition">
            Home
          </a>
          <a href="" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="" className="hover:text-accent transition">
            Spa
          </a>
          <a href="" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
