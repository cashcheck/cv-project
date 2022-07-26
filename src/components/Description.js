import React, { Component } from "react";
import "./styles/Description.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class Description extends Component {
  constructor() {
    super();
    this.state = {
      current: `My name is Kvothe, pronounced nearly the same as "quothe." I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.`,
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
        <h4 id="about">ABOUT ME</h4>
        <div>
          <p className="current" onClick={this.beginEdit}>
            {current}
          </p>
          <form className="inactive" onSubmit={this.finishEdit}>
            <TextField
              id="descrip-field"
              onChange={this.handleChange}
              label="What makes you, you?"
              multiline
              maxRows={2}
              minRows={2}
              variant="filled"
            ></TextField>
            <Button type="submit" variant="outlined">
              FINISH
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Description;
