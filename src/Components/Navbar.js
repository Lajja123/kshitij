import React from "react";
import logo from "../Components/Images/logo.png";
import "../Components/navbar.css";

function Navbar() {
  return (
    <>
      <div className="main-header">
        <div className="header-container">
          <div className="main-logo">
            <div className="logo">
              <img src={logo} className="logo-navbar" />
            </div>
          </div>
          <div className="left-navbar">
            <div className="navigation">
              <input type="checkbox" className="check-menu" /> <span></span>
              <span></span>
              <span></span>
              <ul className="navigation-menu">
                <li className="submenu home-nav">Home</li>
                <li className="submenu">Demos</li>
                <li className="submenu">Features</li>
              </ul>
            </div>
            <div className="main-button">
              <div className="download-btn">
                <button className="button">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
