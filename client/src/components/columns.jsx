import React, { Component } from "react";
import Column from "./column";

class Columns extends Component {
  state = {};
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
