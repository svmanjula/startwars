import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-title">
          
          Star Wars
        </Link>
        <Link to="/WhishList" className="header-WhishList" > Whish list </Link>
      </header>
    </div>
  );
};

export default Header;
