import React, { Component } from "react";
import ExperienceOverview from "./ExperienceOverview";
import { Button, TextField, Typography } from "@mui/material";
import "./styles/Experience.css";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      all: [
        {
          employer: "The Eolian",
          title: "Musician",
          duration: "Ongoing",
          description:
            "Music is one of my great passions. I earned my talent pipes at a young age and have been playing at the Eolian ever since.",
        },
        {
          employer: "University Fishery",
          title: "Artificer",
          duration: "Ongoing",
          description:
            "Arficing is the application of sygaldry to mimick the properties of sympathy to create items with special properties. During my time at the University, I've made many contraptions. Most notable is the Bloodless, an arrow deflecting device.",
        },
        {
          employer: "City of Severen",
          title: "Tax-Collector",
          duration: "1 year",
          description:
            "Tax-collecting is among the more peculiar services I've rendered. In this particular case, Severen's taxes were being stolen by a crew of bandits. Along with the Maer's hired mercenaries I was able to put a stop to the thievary.",
        },
      ],
      add: { employer: "", title: "", duration: "", description: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.beginEdit = this.beginEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(e) {
    const deleteEmployer = e.target.parentNode.previousSibling.textContent;
    const deleteTitle = e.target.parentNode.parentNode.nextSibling.textContent;
    console.log(deleteTitle);
    console.log(deleteEmployer);
    this.setState({
      all: this.state.all.filter(
        (experience) =>
          experience.employer !== deleteEmployer &&
          experience.title !== deleteTitle
      ),
      add: this.state.add,
    });
  }

  beginEdit(e) {
    e.target.classList.toggle("inactive");
    e.target.nextSibling.classList.toggle("inactive");
  }

  cancelEdit(e) {
    e.target.parentNode.parentNode.classList.toggle("inactive");
    e.target.parentNode.parentNode.previousSibling.classList.toggle("inactive");
    this.setState({
      add: { employer: "", title: "", duration: "", description: "" },
    });
  }

  finishEdit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      all: prevState.all.concat(prevState.add),
      add: { employer: "", title: "", duration: "", description: "" },
    }));
    e.target.classList.toggle("inactive");
    e.target.previousSibling.classList.toggle("inactive");
  }

  render() {
    return (
      <div id="experience">
        <h4>Work Experience</h4>
        <ExperienceOverview
          experiences={this.state.all}
          handleDelete={this.handleDelete}
        />
        <Button
          variant="outlined"
          onClick={this.beginEdit}
          sx={{ margin: "40px 0 0 10px" }}
        >
          Add
        </Button>
        <form
          className="inactive"
          onSubmit={this.finishEdit}
          id="add-school-form"
        >
          <Typography varient="h3">
            <strong>Add Work Experience</strong>
          </Typography>
          <TextField
            name="employer"
            value={this.state.add.employer}
            label="Employer"
            onChange={this.handleChange}
          ></TextField>
          <TextField
            name="title"
            label="Title"
            value={this.state.add.title}
            onChange={this.handleChange}
          ></TextField>
          <TextField
            name="duration"
            label="Duration"
            value={this.state.add.duration}
            onChange={this.handleChange}
          ></TextField>
          <TextField
            name="description"
            label="Description"
            value={this.state.add.description}
            multiline
            minRows={4}
            onChange={this.handleChange}
          ></TextField>
          <div id="form-buttons">
            <Button type="submit" variant="outlined">
              Submit
            </Button>
            <Button onClick={this.cancelEdit} variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
