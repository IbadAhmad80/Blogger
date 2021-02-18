import React from "react";
import axios from "axios";
import { server } from "../config/index";
import * as cookie from "cookie";
import Cookie from "js-cookie";
import StripeGateway from "../components/CreatePost/StrapiGateway";
import CreateForm from "../components/CreatePost/CreateForm";
import SignIn from "../components/SinglePost/SignIn";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePost({ user }) {
  const token = useSelector((state) => state.token);
  console.log("role is", user.role.name);
  return (
    <>
      <div>
        {token ? (
          user && user.role ? (
            user.role.name === "Public" ? (
              <StripeGateway user={user} />
            ) : (
              <CreateForm />
            )
          ) : (
            ""
          )
        ) : (
          <SignIn type="membership" />
        )}
      </div>
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
