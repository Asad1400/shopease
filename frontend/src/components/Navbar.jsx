import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ToolTip from "./ToolTip";
import SearchBar from "./SearchBar";
import assets from "./../assets/assets";

const { shopease_logo, iconItems } = assets;

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <ToolTip />
      <div className="container mx-auto flex justify-between items-center gap-4 py-4">
        {/* Logo */}
        <div className="w-[15%] flex justify-center">
          <Link to="/">
            <img src={shopease_logo} alt="ShopEase Logo" className="w-32" />
          </Link>
        </div>

        {/* Search */}
        <div className="w-[65%]">
          <SearchBar />
        </div>

        {/* Auth + Icons */}
        <div className="w-[30%] flex items-center justify-center gap-5">
          <div className="text-sm">
            <Link to="/login" className="transition-colors hover:text-orange-600">Login</Link> /
            <Link to="/register" className="transition-colors hover:text-orange-600 ml-1">Signup</Link>
          </div>
          <p>|</p>
          <ul className="flex gap-6">
            {iconItems.map(({ Icon }, index) => (
              <li key={index}>
                <Badge badgeContent={2} color="warning">
                  <span className={` rounded-full transition-colors duration-300 cursor-pointer`}>
                    <Icon className="text-black text-[28px] hover:text-orange-600" />
                  </span>
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;