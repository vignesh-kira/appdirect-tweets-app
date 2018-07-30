import React, { Component } from "react";
import "../styles/tweet.css";

class Tweet extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="tweet-container">
          <div class="avatar">
            <img src="https://pbs.twimg.com/profile_images/890252563190226944/lP9wOBFy_normal.jpg" />
          </div>
          <div class="data">
            <div class="header">TechCrunch 7/29/2018, 11:22:03 PM</div>
            <div class="content">
              Shortcuts will play a major role in making Siri a truly useful
              assistant https://t.co/3fQJGI9f6V
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tweet;
