import Grid from "@material-ui/core/Grid";
import navBarStyles from "../styles/NavBar.module.scss";
import { MdMail, MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaBloggerB, FaSearch } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
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
              <h6>Paid Blogs</h6>

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
