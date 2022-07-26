import React, { Component } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import SchoolOverview from "./SchoolOverview";
import "./styles/Schooling.css";

class Schooling extends Component {
  constructor() {
    super();

    this.state = {
      all: [
        { school: "Edemah Ruh", degree: "Performer" },
        { school: "University of Temerant", degree: "Arcanist" },
        { school: "Ademre Training", degree: "Path of the Letantha" },
      ],
      add: { school: "", degree: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.beginEdit = this.beginEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      add: {
        ...prevState.add,
        [e.target.name]: value,
      },
    }));
  }

  beginEdit(e) {
    e.target.classList.toggle("inactive");
    e.target.nextSibling.classList.toggle("inactive");
  }

  cancelEdit(e) {
    e.target.parentNode.parentNode.classList.toggle("inactive");
    e.target.parentNode.parentNode.previousSibling.classList.toggle("inactive");
    this.setState({ add: { school: "", degree: "" } });
  }

  finishEdit(e) {
    e.preventDefault();
    console.log(this.state.add);
    if (this.state.next !== "") {
      this.setState((prevState) => ({
        all: prevState.all.concat(prevState.add),
        add: { school: "", degree: "" },
      }));
    }
    console.log(this.state.all);
    e.target.classList.toggle("inactive");
    e.target.previousSibling.classList.toggle("inactive");
  }

  render() {
    return (
      <div id="Schooling">
        <h4>SCHOOLING</h4>
        <div id="timeline">
          <SchoolOverview schools={this.state.all} />
          <Button
            variant="outlined"
            onClick={this.beginEdit}
            sx={{ margin: "10px 0 0 10px" }}
          >
            ADD
          </Button>
          <form
            className="inactive"
            onSubmit={this.finishEdit}
            id="add-school-form"
          >
            <Typography varient="h3">
              <strong>Add School</strong>
            </Typography>
            <TextField
              name="school"
              value={this.state.add.school}
              label="School"
              onChange={this.handleChange}
            ></TextField>
            <TextField
              name="degree"
              label="Degree"
              value={this.state.add.degree}
              onChange={this.handleChange}
            ></TextField>
            <div id="form-buttons">
              <Button type="submit" variant="outlined">
                Submit
              </Button>
              <Button
                onClick={this.cancelEdit}
                variant="outlined"
                color="error"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Schooling;
