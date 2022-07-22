import React, { Component } from "react";
import Button from "@mui/material/Button";
import "./styles/Description.css";

class Description extends Component {
  constructor() {
    super();
    this.state = {
      current:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna eu velit tincidunt blandit in sed tortor. Fusce aliquam fringilla nunc, in bibendum risus. Pellentesque et vulputate lacus. In at suscipit nibh. Curabitur nisi augue, luctus eu turpis at, aliquam sollicitudin quam.",
      next: "",
    };

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
        <h4>Description</h4>
        <div>
          <p className="current" onClick={this.beginEdit}>
            {current}
          </p>
          <form className="inactive" onSubmit={this.finishEdit}>
            <textarea onChange={this.handleChange}></textarea>
            <Button variant="outlined" type="submit">
              Finish
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Description;
