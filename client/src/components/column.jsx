import React, { Component } from "react";
// import Tweets from "./tweets";
import Tweet from "./tweet";
import "../styles/tweet.css";

class Column extends Component {
  state = {
    name: "vignesh"
  };
  render() {
    return (
      <div className="tweets-column">
        {this.props.tweets.map(tweet => (
          <Tweet key={tweet.index} tweet={tweet} />
        ))}
      </div>
    );
  }
}

export default Column;
