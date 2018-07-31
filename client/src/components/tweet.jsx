import React, { Component } from "react";
import TweetParser from "react-tweet-parser";
import Moment from "react-moment";
import "moment-timezone";
import "font-awesome/css/font-awesome.min.css";

class Tweet extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="tweet-container">
          <div className="avatar">
            <img
              src={this.props.tweet.user.profile_image_url}
              alt="profile-pic"
            />
          </div>
          <div className="data">
            <div className="header">
              <b>{this.props.tweet.user.name}</b>
              <span class="mx-1">
                <small class="screen-name">
                  @{this.props.tweet.user.screen_name}
                </small>
                <small class="time ">
                  <Moment fromNow ago>
                    {this.props.tweet.created_at}
                  </Moment>
                </small>
              </span>
            </div>
            <div className="content">
              <TweetParser>{this.props.tweet.text}</TweetParser>

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
