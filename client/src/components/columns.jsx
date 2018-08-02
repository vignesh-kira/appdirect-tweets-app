import React, { Component } from "react";
import Column from "./column";
import Settings from "./settings";
import loaderImg from "../images/loadingblack.gif";

class Columns extends Component {
  constructor(props) {
    super(props);
    let tweetCountLocal = localStorage.getItem("tweetCount");
    let skinLocal = localStorage.getItem("skin");
    let twitterUserLocal = localStorage.getItem("twitterUsers");

    this.state = {
      isloadcomplete: false,
      twitterfeed: [],
      twitterUsers: {
        techcrunch: [],
        laughingsquid: [],
        appdirect: []
      },
      tweetCount: tweetCountLocal ? tweetCountLocal : 15,
      skin: skinLocal ? skinLocal : "Pearl"
    };
    if (twitterUserLocal) {
      this.state.twitterUsers = JSON.parse(twitterUserLocal);
    }
    this.changeTweetCount = this.changeTweetCount.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
    this.changeSkinColor = this.changeSkinColor.bind(this);
    this.changeTweetColumnOrder = this.changeTweetColumnOrder.bind(this);
    this.changeSkinColor(this.state.skin);
  }

  componentDidMount() {
    const promises = [];
    const { twitterfeed, twitterUsers } = this.state;

    Object.keys(twitterUsers).map(i =>
      promises.push(
        fetch(
          "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=" +
            i
        ).then(response => response.json())
      )
    );

    Promise.all(promises).then(values => {
      values.map(value => twitterfeed.push(value));
      this.setState({
        isloadcomplete: true,
        twitterfeed
      });
    });
  }

  changeTweetColumnOrder = twitterfeedIn => {
    let twitterfeed = twitterfeedIn;
    let twitterUsersNew = {};

    this.setState({ twitterfeed });
    twitterfeed.map(
      account => (twitterUsersNew[account[0].user.screen_name] = [])
    );
    localStorage.setItem("twitterUsers", JSON.stringify(twitterUsersNew));
  };

  changeTweetCount = tweetCountIn => {
    let tweetCount = tweetCountIn;
    this.setState({ tweetCount });
    localStorage.setItem("tweetCount", tweetCount);
  };
  changeSkin = skinColor => {
    let skin = skinColor;
    this.setState({ skin });
    localStorage.setItem("skin", skinColor);
    this.changeSkinColor(skin);
  };
  changeSkinColor = skinIn => {
    const skin = skinIn;
    let body = document.body.classList;

    body.remove("body-skin-jade", "body-skin-sapphire", "body-skin-pearl");
    if (skin === "Jade") {
      body.add("body-skin-jade");
    } else if (skin === "Sapphire") {
      body.add("body-skin-sapphire");
    } else {
      body.add("body-skin-pearl");
    }
  };

  render() {
    const { twitterfeed, tweetCount, isloadcomplete, skin } = this.state;
    const loader = [];
    for (var i = 0; i < 3; i++) {
      loader.push(
        <div className="col-lg-4 col-md-12 mb-3">
          <div className="tweets-column loaderColumn">
            <div id="center" className="loader-wrapper">
              <img
                className="loader"
                src={loaderImg}
                height="60"
                width="60"
                alt="loader"
              />
            </div>
          </div>
        </div>
      );
    }

    return isloadcomplete ? (
      <React.Fragment>
        <Settings
          twitterfeed={twitterfeed}
          tweetCount={tweetCount}
          skin={skin}
          changeTweetCount={this.changeTweetCount}
          changeSkin={this.changeSkin}
          changeTweetColumnOrder={this.changeTweetColumnOrder}
        />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">
            {Object.keys(twitterfeed).map(i => (
              <div className="col-lg-4 col-md-12 mb-3">
                <div className="tweets-column">
                  <Column tweets={twitterfeed[i]} tweetCount={tweetCount} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Settings />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">{loader}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Columns;
