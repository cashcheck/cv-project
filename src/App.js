import React, { Component } from "react";
import Description from "./components/Description";
import Personal from "./components/Personal";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="app">
        <Personal />
        <Description />
        <div className="columns"></div>
      </div>
    );
  }
}

export default App;
