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
      skin: skinLocal ? skinLocal : "Pearl",
      url: "https://twitter.com/",
      modal: false
    };
    if (twitterUserLocal) {
      this.state.twitterUsers = JSON.parse(twitterUserLocal);
    }
    this.changeSkinColor(this.state.skin);
  }

  componentDidMount() {
    this.twitterList();
  }

  async twitterList() {
    try {
      const promises = [];
      const { twitterfeed, twitterUsers } = this.state;

      Object.keys(twitterUsers).map(i =>
        promises.push(
          fetch(
            `http://172.104.218.167:8080/1.1/statuses/user_timeline.json?count=30&screen_name=${i}`
          ).then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
        )
      );

      const results = await Promise.all(promises);
      const setTwittefeed = await Promise.all(
        results.map(value => {
          twitterfeed.push(value);
          this.setState({
            isloadcomplete: true,
            twitterfeed
          });
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  /*
   *  Change Column Order, Skin Color and Tweet Count and set LocalStorage
   */
  changeTweetColumnOrder = twitterfeedIn => {
    const twitterfeed = twitterfeedIn;
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
    let bodyClassList = document.body.classList;

    document.body.className = "";
    switch (skin) {
      case "Jade":
        bodyClassList.add("body-skin-jade");
        break;
      case "Sapphire":
        bodyClassList.add("body-skin-sapphire");
        break;
      default:
        bodyClassList.add("body-skin-pearl");
        break;
    }
  };
  changeModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    const { twitterfeed, tweetCount, isloadcomplete, skin, modal, url } = this.state;
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
          modal={modal}
          changeModal={this.changeModal}
        />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">
            {twitterfeed.map(user => (
              <div className="col-lg-4 col-md-12 mb-3">
                <div className="tweets-column">
                  <Column tweets={user} tweetCount={tweetCount} url={url} />
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
