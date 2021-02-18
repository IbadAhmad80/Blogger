export const signIn = (token) => {
  return {
    type: "SIGNIN",
    payload: {
      token: token,
    },
  };
};

export const signOut = () => {
  return {
    type: "SIGNOUT",
  };
};
