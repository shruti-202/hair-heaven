import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation-container">
        <div className="Navigation-logo">
          <NavLink to="/" className="Navigation-logo-brand-name">
            HairHeaven
          </NavLink>
        </div>
        <div className="Navigation-list">
          <NavLink to="/" className="Navigation-list-item">
            HOME
          </NavLink>
          <NavLink to="/shop" className="Navigation-list-item">
            SHOP
          </NavLink>
          <NavLink to="/helpme" className="Navigation-list-item">
            HELP ME
          </NavLink>
          <NavLink to="/trial" className="Navigation-list-item">
            BOOK A TRIAL
          </NavLink>
          <NavLink to="/reviews" className="Navigation-list-item">
            REVIEWS
          </NavLink>
        </div>
        <div className="Navigation-search">
          <img src={SearchIcon} alt="product search" />
          <input placeholder="What are you looking for?"></input>
        </div>
        <div className="Navigation-options">
          <div className="Navigation-options-item">
            <NavLink to="/products" className="Navigation-list-item">
              EXPLORE
            </NavLink>
          </div>
          <div className="Navigation-options-item">
            <NavLink to="/signin">
              <i class="fa-solid fa-heart"></i>
            </NavLink>
          </div>
          <div className="Navigation-options-item">
            <NavLink to="/signin">
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </div>
          <div className="Navigation-options-item">
            <NavLink to="/signin">
              <i class="fa-solid fa-user"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
