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
          <Typo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            posuere orci. Nam id urna interdum, cursus erat vel, porttitor
            libero. Phasellus varius magna vel sem fermentum, quis dictum ex
            varius. Curabitur aliquet nisl vitae aliquam blandit. Nulla
            fermentum orci vitae pretium condimentum. Praesent tempor
          </Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper. Vivamus in scelerisque
            lorem. Ut malesuada feugiat lectus, id tristique mauris pulvinar at
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typo>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper
          </Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper. Vivamus in scelerisque
            lorem. Ut malesuada feugiat lectus, id tristique mauris pulvinar at
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typo>
            Suspendisse ut nisl non arcu tincidunt lacinia id hendrerit metus.
            Pellentesque lacinia a risus nec sagittis. Proin ut augue
            sollicitudin, euismod diam at, elementum orci. Morbi tortor risus,
            mollis vel arcu sed, pulvinar bibendum nunc. Morbi aliquam justo
            libero, sit amet maximus sem vehicula ac. Sed mauris tortor,
            vehicula a massa consequat, pulvinar condimentum turpis. Nam nunc
            velit, interdum tempus bibendum vitae, viverra ut elit.
          </Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper. Vivamus in scelerisque
            lorem. Ut malesuada feugiat lectus, id tristique mauris pulvinar at
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typo>
            Aenean eu auctor lacus, non congue dui. Donec pellentesque libero
            sed nulla venenatis, sed fermentum erat viverra. Proin cursus leo
            vel cursus posuere. Praesent quis metus congue sapien pharetra
            tincidunt sed vel metus. Proin eu posuere lorem. Aliquam imperdiet
            efficitur arcu id fringilla. Phasellus sed dictum erat. Etiam
            sodales eros metus, sit amet cursus quam volutpat quis.
          </Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper. Vivamus in scelerisque
            lorem. Ut malesuada feugiat lectus, id tristique mauris pulvinar at
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
      <Accordion_bar
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typo>
            Phasellus accumsan faucibus ante vel mattis. Quisque bibendum
            ultrices nisl, eget posuere tortor efficitur sed. Morbi vulputate
            non quam sed condimentum. Cras aliquam iaculis diam nec tempus. Nunc
            eu imperdiet velit, quis vulputate mauris. Nam ullamcorper turpis a
            augue dictum, at porttitor ligula lacinia. Donec lobortis dolor in
            libero maximus dictum. Vivamus vitae semper ex. Duis dui ex,
            vulputate sed leo non, accumsan dapibus nisl. Duis consequat quis
            velit non congue. Morbi commodo sagittis risus, non sodales enim
            finibus eu. Quisque at mollis orci. Nullam aliquam nulla dolor, ac
            interdum elit aliquam sed.
          </Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut viverra elit sit amet semper volutpat. Sed vel tellus sit amet
            neque tristique auctor. Fusce fringilla luctus est nec vehicula.
            Nunc egestas felis a eros porta, sed faucibus est cursus. Curabitur
            vitae neque sem. Nunc porta tincidunt semper. Vivamus in scelerisque
            lorem. Ut malesuada feugiat lectus, id tristique mauris pulvinar at
          </Typography>
        </AccordionDetails>
      </Accordion_bar>
    </div>
  );
}
