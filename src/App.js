import React, { Component } from "react";
import Header from "./components/header";
import Columns from "./components/columns";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Columns />
      </React.Fragment>
    );
  }
}

export default App;
