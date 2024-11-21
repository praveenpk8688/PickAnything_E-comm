import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Css/Navbar.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Navbar({ cartItemCount }) {
  return (
    <div className="container-navbarj">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="anchortags" to="/">
            <img className="logo" src="/Images/achieversIT.png" alt="AchieversIT Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link  className="nav-link active anchortags text-primary" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anchortags active" to="/products">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anchortags active" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="user-icon">
                <Link className="anchortags" to="/profile">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.49996 6C7.49996 3.51472 9.51468 1.5 12 1.5C14.4852 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4852 10.5 12 10.5C9.51468 10.5 7.49996 8.48528 7.49996 6Z"
                      fill="#0F172A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75121 20.1053C3.82855 15.6156 7.49195 12 12 12C16.5081 12 20.1716 15.6157 20.2487 20.1056C20.2538 20.4034 20.0823 20.676 19.8116 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21382 22.5 6.5674 21.8917 4.18829 20.7999C3.91762 20.6757 3.74608 20.4031 3.75121 20.1053Z"
                      fill="#0F172A"
                    />
                  </svg>
                </Link>
              </li>
              <li className="cart-icon">
                <Link className="anchortags" to="/cart">
                  <ShoppingCartRoundedIcon id="cart-icon" />
                  {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}