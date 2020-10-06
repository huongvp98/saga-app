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
        ...state,
        loading: true,
        user: [],
        error: null,
      };
    case types.GET_USER_SUCCEED:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case types.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload.error,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    default:
      return state;
  }
};
