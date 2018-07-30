import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Tweet extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="tweet-container">
          <div className="avatar">
            <img src="https://pbs.twimg.com/profile_images/890252563190226944/lP9wOBFy_normal.jpg" />
          </div>
          <div className="data">
            <div className="header">
              <b>TechCrunch</b>
              <time>7/29/2018, 11:22:03 PM</time>
            </div>
            <div className="content">
              <p>
                Shortcuts will play a major role in making Siri a truly useful
                assistant
              </p>
              <div className="tweet-link">
                <a
                  className="btn-primary btn-sm"
                  data-toggle="collapse"
                  href="https://twitter.com/TechCrunch/status/1023791566165614594"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tweet;
