import React, { useEffect, useState } from "react";
import Styles from "../styles/Footer.module.scss";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

export default function Footer() {
  const [data, setData] = useState({ email: "", validate: "" });
  const footerContainer = {
    backgroundColor: "white",
    gridRow: "8",
    gridColumn: "1/6",
    alignSelf: "center",
  };

  const subscription = (e) => {
    e.preventDefault();
    var re = /\S+@\S+\.\S+/;
    let response = re.test(e.target.email.value);
    if (response) setData({ ...data, validate: "done" });
    else setData({ ...data, validate: "failed" });
    console.log(data, response, e.target.email);
    if (response) {
      axios
        .post(`https://gymhut.herokuapp.com/sendEmail/${e.target.email.value}`)
        .then((response) => {
          toast.info("Subscribed!! Check Email ", {
            position: "top-center",
          });
        })
        .catch((error) => {
          if (error.response) {
            toast.error(`${error}`, {
              position: "top-center",
            });
          }
        });
    } else {
      toast.error(`invalid email , try again`, {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.footer_heading}>
          {" "}
          Join Our Newsletter to become updated every instance
        </div>

        <div className={Styles.getStart}>
          <div className={Styles.heading}>Get Started</div>
          <ul style={{ paddingTop: "1vw" }}>
            <li style={{ paddingTop: "1vw", cursor: "pointer" }}>Home</li>
            <li style={{ paddingTop: "1vw", cursor: "pointer" }}>Services</li>
            <li style={{ paddingTop: "1vw", cursor: "pointer" }}>Membership</li>
            <li style={{ paddingTop: "1vw", cursor: "pointer" }}>About us</li>
          </ul>
        </div>
        <div className={Styles.about_us}>
          <div className={Styles.heading}>About Us</div>
          <ul style={{ paddingTop: "1vw" }}>
            <li style={{ paddingTop: "1vw" }}>Location</li>
            <li style={{ paddingTop: "1vw" }}>Reviews</li>
            <li style={{ paddingTop: "1vw" }}>Information</li>
            <li style={{ paddingTop: "1vw" }}>Contact</li>
          </ul>
        </div>
        <form onSubmit={subscription} className={Styles.subscribe}>
          <div>
            {" "}
            <input
              className={Styles.email1}
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
              type="email"
              name="email"
            ></input>
          </div>

          <button
            type="submit"
            className={Styles.subscribe_button}
            value="Send"
          >
            Subscribe
          </button>
        </form>

        <div style={footerContainer}>
          <div className={Styles.copyrighted_text}>
            <div className={Styles.social_logos}>
              <a
                href="https://www.facebook.com/home.php?ref=wizard"
                target="_blank"
              >
                <FaFacebookF style={{ marginRight: "3vw", color: "black" }} />
              </a>
              <a href="https://mobile.twitter.com/login" target="_blank">
                <GrTwitter style={{ marginRight: "3vw", color: "black" }} />
              </a>
              <a href="https://www.linkedin.com/login/" target="_blank">
                <FaLinkedin style={{ marginRight: "3vw", color: "black" }} />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <AiFillYoutube style={{ color: "black" }} />
              </a>
            </div>
            Blogger © 2021 , Website by IbadAhmad
          </div>
        </div>
      </div>
    </div>
  );
}
