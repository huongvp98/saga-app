import types from "@constant";

const initialState = {
  loading: false,
  error: null,
  user: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUESTED:
      return {
        loading: true,
        user: [],
        error: null,
      };
    case types.GET_USER_SUCCEED:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case types.GET_USER_FAILED:
      return {
        loading: false,
        user: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
