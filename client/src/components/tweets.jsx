import React, { Component } from "react";
import Tweet from "./tweet";
import "../styles/tweet.css";

class Tweets extends Component {
  state = {};
  render() {
    return (
      <div className="container mx-0">
        <div className="row">
          <div className="col-4">
            <div id="tweets-column-1" className="tweets-column">
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweets;
