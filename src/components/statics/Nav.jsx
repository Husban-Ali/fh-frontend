import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import links from "../../data/links";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prevState) => !prevState); // Toggle the state
  };
  return (
    <div className="flex justify-center items-center font-bold">
      {links.map((link, index) => {
        return (
          <Link key={index} to={`${link.redirect}`}>
            <span
              key={index}
              className="px-2 text-xs font-Ubuntu text-primary hover:cursor-pointer"
            >
              {link.name}
            </span>
          </Link>
        );
      })}
      <div className="ml-6 ">
        {/* TRACK Button */}
        <Button className="px-6 mx-2" onClick={toggleSearch}>
          TRACK
        </Button>

        {/* Conditional rendering of input box */}
        {showSearch && (
          <div className="flex justify-betweeen items-center absolute top-20 left-100 bg-white border border-gray-300 p-4 rounded shadow-lg z-10">
            <input
              type="text"
              placeholder="Enter tracking info..."
              className="border px-4 py-2 w-60"
            />
            <button
              className="mt-2 bg-none"
              onClick={() => setShowSearch(false)}
            >
              <Search className="mx-2 h-8" />
            </button>
          </div>
        )}

        <Link to="/auth/login">
          <Button className="px-6 mx-2 " variant={"outline"}>
            SIGN IN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
