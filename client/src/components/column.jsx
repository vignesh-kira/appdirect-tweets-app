import React, { Component } from "react";
import Tweet from "./tweet";
import "../styles/tweet.css";

class Column extends Component {
  state = {
    name: "vignesh"
  };
  render() {
    const tweets = this.props.tweets;
    const tweetCount = this.props.tweetCount;
    return (
      <div className="tweet-column-data">
        {tweets
          .slice(0, tweetCount)
          .map(tweet => <Tweet key={tweet.index} tweet={tweet} />)}
      </div>
    );
  }
}

export default Column;
