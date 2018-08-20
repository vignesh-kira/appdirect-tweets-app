import React from "react";
import logo from "../images/logo.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">
        Welcome to AppDirect Front End Code Challenge - Display Tweets
      </h1>
    </header>
  );
};

export default Header;
