import React, { Component } from "react";
import Column from "./column";

class Columns extends Component {
  state = {
    twitterfeed: {}
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ state: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(
      "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=appdirect"
    );
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div className="container mx-0">
        <div className="row">
          <div className="col-4">
            <Column />
          </div>
          <div className="col-4">
            <Column />
          </div>
          <div className="col-4">
            <Column />
          </div>
        </div>
      </div>
    );
  }
}

export default Columns;
