import React, { Component } from "react";
import Description from "./components/Description";
import Personal from "./components/Personal";
import "./App.css";
import Schooling from "./components/Schooling";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="app">
        <Personal />
        <Description />
        <Schooling />
        <Experience />
      </div>
    );
  }
}

export default App;
