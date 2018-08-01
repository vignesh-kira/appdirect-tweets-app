import React, { Component } from "react";
import Column from "./column";
import Settings from "./settings";

class Columns extends Component {
  constructor() {
    super();
    this.state = {
      loadcomplete: false,
      twitterfeed: {
        techcrunch: [],
        laughingsquid: [],
        appdirect: []
      }
    };
  }

  updateTwitterFeed = (data, user) => {
    var twitterfeed = { ...this.state.twitterfeed };
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

    const isloadcomplete = this.state.loadcomplete;
    return isloadcomplete ? (
      <React.Fragment>
        <Settings />
        <div className="container mx-0 p-0">
          <div className="row col-lg-12 col-sm-12  m-0 p-0">
            <div className="col-lg-4 col-md-12 mb-3">
              <Column tweets={techcrunch} />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Column tweets={laughingsquid} />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Column tweets={appdirect} />
            </div>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <div />
    );
  }
}

export default Columns;

/*
    if (!this.state.loading) {
      return (
        <div className="container mx-0">
          <div className="row">
            <div className="col-4 col-md-4">
              {console.log(techcrunch[0].created_at)}
              <Column tweet={techcrunch[0]} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }

*/
/*
  <div className="col-4 col-md-4">
            <Column tweet={this.state.twitterfeed.laughingsquid} />
          </div>
          <div className="col-4 col-md-4">
            <Column tweet={this.state.twitterfeed.appdirect} />
          </div>
*/
