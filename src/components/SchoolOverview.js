import React from "react";
import "./styles/SchoolOverview.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

function SchoolOverview(props) {
  const schools = props.schools.map((school) => (
    <Step key={school.school}>
      <StepLabel>
        <div className="school-info">
          <div className="sub-info">
            <h6>{school.school}</h6>
            <DeleteIcon className="pointer" />
          </div>
          <p>{school.degree}</p>
        </div>
      </StepLabel>
    </Step>
  ));

  return (
    <Box id="all-schools">
      <Stepper activeStep="None">{schools}</Stepper>
    </Box>
  );
}

export default SchoolOverview;
