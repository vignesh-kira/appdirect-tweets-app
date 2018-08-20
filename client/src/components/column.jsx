import React from "react";
import Tweet from "./tweet";
import "../styles/tweet.css";

const Column = ({ tweets, tweetCount }) => {
  return (
    <div className="tweet-column-data">
      {tweets.slice(0, tweetCount).map(tweet => (
        <Tweet key={tweet.index} tweet={tweet} />
      ))}
    </div>
  );
};

export default Column;
