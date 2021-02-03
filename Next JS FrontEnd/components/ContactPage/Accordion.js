import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion_bar = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const Typo = withStyles({
  root: {
    color: "white",
  },
})(Typography);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: " rgb(52, 56, 51)",
    borderBottom: "1px solid gray",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Accordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion_bar
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typo>Query Number #1</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is Query of the above mentioned Question.This is Query of the
            above mentioned Question.
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typo>Query Number #2</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is Query of the above mentioned Question.This is Query of the
            above mentioned Question.
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typo>Query Number #3</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is Query of the above mentioned Question.This is Query of the
            above mentioned Question.
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typo>Query Number #4</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is Query of the above mentioned Question.This is Query of the
            above mentioned Question.
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typo>Query Number #5</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is Query of the above mentioned Question.This is Query of the
            above mentioned Question.
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
    </div>
  );
}
