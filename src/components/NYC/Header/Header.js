import React from "react";
import "./header.scss";
import Navbar from "./Navbar/Navbar";
import Quotes from "./Quote/Quotes";

const Header = () => {
  return (
    <div className="container">
      <Navbar />
      <Quotes />
    </div>
  );
};

export default Header;
