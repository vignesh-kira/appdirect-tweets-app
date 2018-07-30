import React, { Component } from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Tweets Display Demo</h1>
      </header>
    );
  }
}
// {this.state.response}

export default Header;
