import React from "react";
import axios from "axios";
import { server } from "../config/index";
import * as cookie from "cookie";
import StripeGateway from "../components/CreatePost/StrapiGateway";
import CreateForm from "../components/CreatePost/CreateForm";
import SignIn from "../components/SinglePost/SignIn";
import { useSelector } from "react-redux";

export default function CreatePost({ user }) {
  const token = useSelector((state) => state.token);
  const [account, isAccount] = React.useState(false);

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
          ) : account === "Public" ? (
            <StripeGateway />
          ) : (
            <CreateForm />
          )
        ) : (
          <SignIn type="membership" isAccount={isAccount} />
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
