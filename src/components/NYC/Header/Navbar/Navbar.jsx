import React, { useState } from "react";
import "./navbar.scss";
import menu from "../../../images/menu.png";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleMenuClick = () => {
    console.log("hide the button");
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <div className="navbar">
        <h3 className="logo">SpiderNews</h3>
        <nav>
          <ul className={isToggle ? "hidemenu" : "showmenu"}>
            <li>
              <a className={isToggle ? "hide" : "show"} href="a">
                News
              </a>
            </li>
            <li>
              <a className={isToggle ? "hide" : "show"} href="b">
                Social
              </a>
            </li>
            <li>
              <a className={isToggle ? "hide" : "show"} href="c">
                About
              </a>
            </li>
            <li>
              <a
                style={{ color: "coral" }}
                className={isToggle ? "hide" : "show"}
                href="log in /sign in"
              >
                Log In | Sign Up
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={handleMenuClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
