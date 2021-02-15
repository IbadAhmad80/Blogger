import React from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { server } from "../config/index";
import * as cookie from "cookie";
import StripeGateway from "../components/CreatePost/StrapiGateway";

export default function CreatePost({ user }) {
  return (
    <>
      <div>
        {Cookie.get("token") ? "You are already signed in" : "Sign in First"}
      </div>
      {user && user.role ? (
        user.role.name === "Public" ? (
          <StripeGateway user={user} />
        ) : (
          "You are already authorized"
        )
      ) : (
        ""
      )}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const parsedCookie =
    context.req.headers.cookie && cookie.parse(context.req.headers.cookie);

  let user =
    parsedCookie &&
    parsedCookie.token &&
    (await axios.get(`${server}/users/me`, {
      headers: {
        Authorization: `Bearer ${parsedCookie.token}`,
      },
    }));
  return {
    props: {
      user: parsedCookie ? user.data : "",
    },
  };
};
