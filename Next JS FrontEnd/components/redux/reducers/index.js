const initialStore = {
  token: "",
};
export const accountReducer = (reducer_state = state, action) => {
  switch (action.type) {
    case "SIGNIN":
      reducer_state.token = action.payload.token;
      return reducer_state;

    case "SIGNOUT":
      reducer_state = {};
      return reducer_state;
    default:
      return reducer_state;
  }
};
