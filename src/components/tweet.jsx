import React from "react";
import TweetParser from "react-tweet-parser";
import Moment from "react-moment";
import MomentJS from "moment";

/*
 * Time formatted to simple text if less than a day and a complete format if more than 24 hrs
*/
const formatDate = tweet => {
  const today = MomentJS();
  const created_at = MomentJS(tweet.created_at);
  const daydiff = today.diff(created_at, "days");

  if (daydiff === 0) {
    return (
      <Moment fromNow ago>
        {tweet.created_at}
      </Moment>
    );
  } else {
    return <Moment format="lll">{tweet.created_at}</Moment>;
  }
};

const Tweet = ({ tweet, url }) => {
  return (
    <React.Fragment>
      <div className="tweet-container">
        <div className="avatar">
          <img src={tweet.user.profile_image_url} alt="profile-pic" />
        </div>
        <div className="data">
          <div className="header">
            <b>{tweet.user.name}</b>
            <span className="mx-1">
              <small className="screen-name">@{tweet.user.screen_name}</small>
              <small className="time">{formatDate(tweet)}</small>
            </span>
          </div>
          <div className="content">
            <TweetParser>{tweet.text}</TweetParser>

            <div className="tweet-link">
              <a
                className="btn-primary btn-sm"
                data-toggle="collapse"
                href={url + tweet.user.name + "/status/" + tweet.id_str}
                role="button"
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
};

export default Tweet;
