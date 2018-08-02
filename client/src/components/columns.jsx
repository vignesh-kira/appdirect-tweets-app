import React, { Component } from "react";
import Column from "./column";
import Settings from "./settings";
import loaderImg from "../images/loader.gif";
import LocalStorage from "react-localstorage";

class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloadcomplete: false,
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

  componentDidMount() {
    const promises = [];
    promises.push(
      fetch(
        "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=techcrunch"
      ).then(response => response.json())
    );
    promises.push(
      fetch(
        "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=laughingsquid"
      ).then(response => response.json())
    );
    promises.push(
      fetch(
        "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
      ).then(response => response.json())
    );

    Promise.all(promises).then(values => {
      const { twitterfeed } = this.state;
      twitterfeed.techcrunch = values[0];
      twitterfeed.laughingsquid = values[1];
      twitterfeed.appdirect = values[2];
      this.setState({
        isloadcomplete: true,
        twitterfeed
      });
    });
  }

  render() {
    const { twitterfeed, tweetCount, isloadcomplete } = this.state;
    const loader = [];
    for (var i = 0; i < 3; i++) {
      loader.push(
        <div className="col-lg-4 col-md-12 mb-3">
          <div className="tweets-column">
            <div id="center" className="loader-wrapper">
              <img
                className="loader"
                src={loaderImg}
                height="40px"
                width="40px"
                alt="loader"
              />
            </div>
          </div>
        </div>
      );
    }
    return isloadcomplete ? (
      <React.Fragment>
        <Settings />
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
