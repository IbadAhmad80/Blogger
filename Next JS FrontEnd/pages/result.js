import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { server } from "../config/index";
import * as cookie from "cookie";
export default function Result({ user }) {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <div>
      <h1>Payment Result</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
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
