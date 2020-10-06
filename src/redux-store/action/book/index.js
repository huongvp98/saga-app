import types from "@constant";
const getUsersRequested = () => {
  return {
    type: types.GET_USER_REQUESTED,
  };
};
const getUsersSucceed = (user) => {
  return {
    type: types.GET_USER_SUCCEED,
    payload: user,
  };
};
const getUsersFailed = (error) => {
  return {
    type: types.GET_USER_FAILED,
    payload: {
      error,
    },
  };
};
const updateState = (payload) => {
  return {
    type: types.UPDATE_USER,
    payload: payload,
  };
};
export default {
  getUsersRequested,
  getUsersSucceed,
  getUsersFailed,
  updateState,
};
