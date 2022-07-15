import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#">
            news.
          </a>
          <a className="item-container" href="#">
            Home
          </a>
          <a className="item-container" href="#">
            Sports
          </a>
          <a className="item-container" href="#">
            Weather
          </a>
          <a className="item=container" href="#">
            Economy
          </a>
        </div>
        <div className="right">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
