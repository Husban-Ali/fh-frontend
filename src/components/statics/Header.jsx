import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="lg:justify-around justify-between items-center flex shadow-md">
      <div className="flex justify-center items-center">
        <Link to="/">
        <img src="/logo-new.png" alt="" width={100} height={100} />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Nav />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
