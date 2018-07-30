import React, { Component } from "react";
// import Tweets from "./tweets";
import Tweet from "./tweet";
import "../styles/tweet.css";

class Column extends Component {
  state = {};
  render() {
    return (
      <div className="tweets-column">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    );
  }
}

export default Column;
