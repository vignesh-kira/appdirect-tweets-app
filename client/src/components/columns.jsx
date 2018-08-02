import React, { Component } from "react";
import Column from "./column";
import Settings from "./settings";
import loaderImg from "../images/loader.gif";
import LocalStorageS from "react-localstorage";

class Columns extends Component {
  constructor(props) {
    super(props);
    let tweetCountLocal = localStorage.getItem("tweetCount");
    this.state = {
      isloadcomplete: false,
      twitterfeed: {
        techcrunch: [],
        laughingsquid: [],
        appdirect: []
      },
      tweetCount: 15,
      skin: "Pearl"
    };
    if (tweetCountLocal !== null) {
      this.state.tweetCount = tweetCountLocal;
    }
    this.changeTweetCount = this.changeTweetCount.bind(this);
  }

  changeColumnOrder = () => {};

  componentDidMount() {
    const promises = [];
    const { twitterfeed } = this.state;

    Object.keys(twitterfeed).map(i =>
      promises.push(
        fetch(
          "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=" +
            i
        ).then(response => response.json())
      )
    );

    Promise.all(promises).then(values => {
      twitterfeed.techcrunch = values[0];
      twitterfeed.laughingsquid = values[1];
      twitterfeed.appdirect = values[2];
      this.setState({
        isloadcomplete: true,
        twitterfeed
      });
    });
  }

  changeTweetCount = tweetCountIn => {
    let tweetCount = tweetCountIn;
    this.setState({ tweetCount });
    localStorage.setItem("tweetCount", tweetCount);
  };

  render() {
    const { twitterfeed, tweetCount, isloadcomplete, skin } = this.state;
    const loader = [];
    for (var i = 0; i < 3; i++) {
      loader.push(
        <div className="col-lg-4 col-md-12 mb-3">
          <div className="tweets-column fixedHeight">
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
        <Settings
          twitterfeed={twitterfeed}
          tweetCount={tweetCount}
          skin={skin}
          changeTweetCount={this.changeTweetCount}
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
