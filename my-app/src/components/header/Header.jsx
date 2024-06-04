import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/">ILY-SHOP</Link>
      <nav>
        <Link to="/cart" className="ml-4">
          Cart
        </Link>
        <Link to="/autn" className="ml-4">
          Login
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
