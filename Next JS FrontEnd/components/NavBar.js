import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../components/redux/actions";
import Grid from "@material-ui/core/Grid";
import navBarStyles from "../styles/NavBar.module.scss";
import { MdMail, MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaBloggerB, FaSearch } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import Cookie from "js-cookie";
import axios from "axios";
import { server } from "../config/index";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { AiFillCaretDown } from "react-icons/ai";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    color: "white",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    color: "white",
    "&:focus": {
      backgroundColor: "#d9e6f2",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
  },
}))(MenuItem);

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [username, setUsername] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    if (Cookie.get("token")) {
      getUser(Cookie.get("token")).then((res) => {
        setUsername(res.data.username);
      });
      dispatch(signIn(Cookie.get("token")));
    }
  });

  const getUser = async (token) => {
    // authenticate the token on the server and place set user object
    try {
      let res = await axios.get(`${server}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (err) {
      console.log("Error during the Authentication :", err);
    }
  };

  const logOut = () => {
    //remove token and user cookie
    Cookie.remove("token");
    delete window.__user;
    dispatch(signOut());
    handleClose();
    setUsername("");
  };
  return (
    <>
      <div className={navBarStyles.top_bar}>
        <div className={navBarStyles.mail_container}>
          <span className={navBarStyles.mail_logo}>
            <MdMail />
          </span>
          <span>info@gmail.com</span>
        </div>
        <div className={navBarStyles.contact_container}>
          <span className={navBarStyles.phone_logo}>
            <MdPhoneInTalk />
          </span>
          <span>+012 345 6789</span>
        </div>
        {username !== "" ? (
          <div className={navBarStyles.contact_container}>
            <span
              className={
                username === ""
                  ? navBarStyles.no_style
                  : navBarStyles.profile_pic
              }
            >
              {username.charAt(0).toUpperCase()}
            </span>
            <span
              className={
                username === ""
                  ? navBarStyles.no_style
                  : navBarStyles.profile_name
              }
              onClick={handleClick}
            >
              <AiFillCaretDown />
            </span>
          </div>
        ) : (
          ""
        )}

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemText secondary={username} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText secondary=" Log Out " onClick={logOut} />
          </StyledMenuItem>
        </StyledMenu>
      </div>

      <div className={navBarStyles.navbar_container}>
        <div className={navBarStyles.grid_1}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div>
              <span className={navBarStyles.site_logo}>
                <FaBloggerB />
              </span>
              <span className={navBarStyles.site_name}> Blogger</span>
            </div>
            <div className={navBarStyles.site_desc}>
              Catch All top Blogs here
            </div>

            <div>
              <div className={navBarStyles.search_container}>
                <input
                  type="text"
                  required={true}
                  className={navBarStyles.form_input}
                  placeholder="Search"
                />
                <FaSearch className={navBarStyles.search_logo} />
              </div>
            </div>
          </Grid>
        </div>

        <div className={navBarStyles.grid_2}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div
              className={navBarStyles.route_headings}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link href="/">
                <h6>Home</h6>
              </Link>
              <Link href="/create_post">
                <h6>Create Post</h6>
              </Link>

              <Link href="/about">
                <h6>About</h6>
              </Link>

              <Link href="/contact">
                <h6>Contact</h6>
              </Link>
            </div>
            <div className={navBarStyles.social_icons}>
              {" "}
              <div className={navBarStyles.social_logos}>
                <a
                  href="https://www.facebook.com/home.php?ref=wizard"
                  target="_blank"
                >
                  <FaFacebookF className={navBarStyles.logos} />
                </a>
                <a href="https://mobile.twitter.com/login" target="_blank">
                  <GrTwitter className={navBarStyles.logos} />
                </a>
                <a href="https://www.linkedin.com/login/" target="_blank">
                  <FaLinkedin className={navBarStyles.logos} />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <AiFillYoutube className={navBarStyles.logos} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FiInstagram className={navBarStyles.logos} />
                </a>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
}
