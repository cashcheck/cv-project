import React, { Component } from "react";
import "./styles/ExperienceOverview.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

function ExperienceOverview(props) {
  const experiences = props.experiences.map((experience) => (
    <Card sx={{ width: 270 }} key={experience.employer}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {experience.duration}
        </Typography>
        <div id="middle-row">
          <Typography variant="h5">{experience.employer}</Typography>
          <DeleteIcon onClick={props.handleDelete} className="pointer" />
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {experience.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.8rem", marginTop: "10px" }}
        >
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  ));

  return <div id="experiences">{experiences}</div>;
}

export default ExperienceOverview;
