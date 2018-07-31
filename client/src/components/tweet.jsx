import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Tweet extends Component {
  state = {};
  render() {
    console.log(this.props.tweet);
    return (
      <React.Fragment>
        <div className="tweet-container">
          <div className="avatar">
            <img src={this.props.tweet.user.profile_image_url} />
          </div>
          <div className="data">
            <div className="header">
              <b>{this.props.tweet.user.name}</b>
              <time>{this.props.tweet.created_at}</time>
            </div>
            <div className="content">
              <p>{this.props.tweet.text}</p>
              <div className="tweet-link">
                <a
                  className="btn-primary btn-sm"
                  data-toggle="collapse"
                  href={
                    "https://twitter.com/" +
                    this.props.tweet.user.name +
                    "/status/" +
                    this.props.tweet.id_str
                  }
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
/*

*/
