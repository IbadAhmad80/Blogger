import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import React from "react";
import ReactLoading from "react-loading";
import { server } from "../config/index";
import * as cookie from "cookie";
import { loadStripe } from "@stripe/stripe-js";
export default function Result() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/create_post");
  });

  useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Redirecting to the Page </h2>
      <div style={{ textAlign: "center", marginLeft: "36rem" }}>
        <ReactLoading
          type={"bubbles"}
          color={"rgb(65, 65, 255)"}
          height={"25%"}
          width={"15%"}
        />
      </div>
    </div>
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
  let { id } = user.data;
  let role_id;
  const roles = await axios.get(`${server}/users-permissions/roles`);
  roles.data.roles.map((role) => {
    role.name === "Authenticated" ? (role_id = role.id) : "";
  });

  const updatedRole = {
    role: {
      _id: `${role_id}`,
      id: `${role_id}`,
    },
  };
  user && (await axios.put(`${server}/users/${id}`, updatedRole));

  return {
    props: {
      user: parsedCookie ? user.data : "",
    },
  };
};
