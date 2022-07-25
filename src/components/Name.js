import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/Name.css";

class Name extends Component {
  constructor() {
    super();
    this.state = { current: "fistName lastName", next: "" };

    this.handleChange = this.handleChange.bind(this);
    this.beginEdit = this.beginEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ next: e.target.value });
  }

  beginEdit(e) {
    e.target.classList.toggle("inactive");
    e.target.nextSibling.classList.toggle("inactive");
  }

  finishEdit(e) {
    e.preventDefault();
    if (this.state.next !== "") {
      this.setState({ current: this.state.next, next: "" });
    }
    e.target.classList.toggle("inactive");
    e.target.previousSibling.classList.toggle("inactive");
  }

  render() {
    const { current } = this.state;

    return (
      <div>
        <h3 className="name" onClick={this.beginEdit}>
          {current}
        </h3>
        <form id="nameForm" className="inactive" onSubmit={this.finishEdit}>
          <input className="name" onChange={this.handleChange}></input>
          <Button type="submit" variant="outlined">
            FINISH
          </Button>
        </form>
      </div>
    );
  }
}

export default Name;
