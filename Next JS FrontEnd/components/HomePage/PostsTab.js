import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, StylesProvider, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors/purple";
import SwitchPost from "./SwitchPost";

function TabPanel(props) {
  const mostPopular = [];
  const healthCategory = [];
  const { children, value, index, ...other } = props;
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
}));

export default function FullWidthTabs({ blogs }) {
  const readMore = blogs.slice(-3);
  let mostPopular = blogs;
  let entertainmentBlogs = [];
  blogs.map((blog) =>
    blog.categories[0].name === "entertainment"
      ? entertainmentBlogs.push(blog)
      : console.log()
  );

  // console.log(
  //   mostPopular.sort((a, b) => (a.likes > b.likes ? 1 : -1)).slice(-3)
  // );

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Recent Blogs" {...a11yProps(0)} />
          <Tab label="Most Popular" {...a11yProps(1)} />
          <Tab label="Entertainment " {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* <div> */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          {readMore.map((blog) => {
            return (
              <SwitchPost
                title={blog.title}
                image={blog.image}
                key={blog.id}
                id={blog.id}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {mostPopular
            .sort((a, b) => (a.likes > b.likes ? 1 : -1))
            .slice(0, 3)
            .map((blog) => {
              return (
                <SwitchPost
                  title={blog.title}
                  image={blog.image}
                  key={blog.id}
                  id={blog.id}
                />
              );
            })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {entertainmentBlogs.slice(-3).map((blog) => {
            return (
              <SwitchPost
                title={blog.title}
                image={blog.image}
                key={blog.id}
                id={blog.id}
              />
            );
          })}
        </TabPanel>
        {/* </div> */}
      </SwipeableViews>
    </div>
  );
}
