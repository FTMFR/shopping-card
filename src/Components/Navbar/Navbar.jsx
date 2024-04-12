import React from "react";
import "./navbar.css";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm d-flex">
      <div className="container-md">
        <a href="/" className="navbar-brand">
          SabzLearn Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              Learn
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Docs
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About Us
            </a>
          </li>
        </ul>
        <div className="bag-box">
          <a href="/" className="bag">
            <BsBag className="text-white h-50 w-50" />
            <span className="bag-products-count">0</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
