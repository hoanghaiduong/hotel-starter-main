import React from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex items-center justify-between">
        {/* logo */}
        <a  href="/">
          <img src={LogoWhite} alt="" />
        </a>
        {/* <Link to={"#"}>kaka</Link> */}
        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
