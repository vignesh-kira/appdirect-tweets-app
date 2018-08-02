import React, { Component } from "react";
import Column from "./column";
import Settings from "./settings";
import loader from "../images/loader.gif";
import LocalStorage from "react-localstorage";

class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadcomplete: false,
      twitterfeed: {
        techcrunch: [],
        laughingsquid: [],
        appdirect: []
      },
      tweetCount: 30
    };
  }

  changeColumnOrder = () => {
    let newState = this.state;
    newState = {
      tweetCount: 5,
      tweetTest: ["techcrunch"],
      loadcomplete: false,
      twitterfeed: {
        techcrunch: [],
        laughingsquid: [],
        appdirect: []
      }
    };
    this.setState(newState);
  };

  updateTwitterFeed = (data, user) => {
    const twitterfeed = { ...this.state.twitterfeed };
    if (user === "appdirect") {
      twitterfeed.appdirect = data;
    } else if (user === "laughingsquid") {
      twitterfeed.laughingsquid = data;
    } else {
      twitterfeed.techcrunch = data;
    }
    this.setState({ loadcomplete: true, twitterfeed });
  };

  componentDidMount() {
    fetch(
      "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=techcrunch"
    )
      .then(response => response.json())
      .then(data => this.updateTwitterFeed(data, "techcrunch"));
    fetch(
      "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=laughingsquid"
    )
      .then(response => response.json())
      .then(data => this.updateTwitterFeed(data, "laughingsquid"));
    fetch(
      "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
    )
      .then(response => response.json())
      .then(data => this.updateTwitterFeed(data, "appdirect"));
  }

  render() {
    const { techcrunch, laughingsquid, appdirect } = this.state.twitterfeed;
    const { tweetCount } = this.state;
    const isloadcomplete = this.state.loadcomplete;
    //  this.changeColumnOrder();
    //  this.state.tweetCounst.techcrunch = ["1", "2", "3"];
    // console.log(this.state.tweetCounst.techcrunch);
    console.log(this.state);
    return isloadcomplete ? (
      <React.Fragment>
        <Settings />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <Column tweets={techcrunch} tweetCount={tweetCount} />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <Column tweets={laughingsquid} tweetCount={tweetCount} />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <Column tweets={appdirect} tweetCount={tweetCount} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Settings />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <div id="center" className="loader-wrapper">
                  <img
                    className="loader"
                    src={loader}
                    height="40px"
                    width="40px"
                    alt="loader"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <div id="center" className="loader-wrapper">
                  <img
                    className="loader"
                    src={loader}
                    height="40px"
                    width="40px"
                    alt="loader"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <div className="tweets-column">
                <div id="center" className="loader-wrapper">
                  <img
                    className="loader"
                    src={loader}
                    height="40px"
                    width="40px"
                    alt="loader"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Columns;
