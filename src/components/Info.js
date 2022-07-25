import React, { Component } from "react";
import Button from "@mui/material/Button";
import "./styles/Info.css";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = { current: props.type, next: "" };

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
    return (
      <div>
        <p className="info" onClick={this.beginEdit}>
          {this.state.current}
        </p>
        <form className="inactive info-form" onSubmit={this.finishEdit}>
          <input
            onChange={this.handleChange}
            placeholder={this.props.type}
            className="info-input"
          ></input>
          <Button type="submit" variant="outlined">
            FINISH
          </Button>
        </form>
      </div>
    );
  }
}

export default Info;
