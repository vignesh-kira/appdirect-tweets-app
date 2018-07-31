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
        <Tweet tweet={this.props.tweet[0]}> </Tweet>
      </div>
    );
  }
}

export default Column;

/*
  <Tweet tweet={this.props.tweet}> </Tweet>
        <Tweet tweet={this.props.tweet}> </Tweet>
        <Tweet tweet={this.props.tweet}> </Tweet>
        <Tweet tweet={this.props.tweet}> </Tweet>
        <Tweet tweet={this.props.tweet}> </Tweet>
        <Tweet tweet={this.props.tweet}> </Tweet>
 */
