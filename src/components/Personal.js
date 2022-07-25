import React, { Component } from "react";
import "./styles/Personal.css";
import Name from "./Name";
import Info from "./Info";

class Personal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="Personal">
        <Name />
        <div id="infoContainer">
          <Info type="yourPhoneNumber" />
          <Info type="youremail@email.com" />
        </div>
      </div>
    );
  }
}

export default Personal;
