import React, { Component } from "react";
import Tweet from "./tweet";
import "../styles/tweet.css";

class Column extends Component {
  render() {
    const { tweets, tweetCount } = this.props;

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
