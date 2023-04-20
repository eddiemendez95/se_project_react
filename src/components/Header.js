import "../blocks/header.css";
import avatarImage from "../images/avatar.svg";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo.svg";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({ cityName, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={headerLogo} alt="logo" />
        </div>
        <p className="header__info">
          {currentDate}, {cityName}
        </p>
      </div>
      <div className="header__info-container">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add New Clothes
          </button>
        </div>
        <div>
          <Link className="header__userinfo-link" to="/profile">
            <div className="header__username">Terrence Tegegne</div>
            <img
              className="header__useravatar"
              src={avatarImage}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
