import types from "../../../constant";
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
export default {
  getUsersRequested,
  getUsersSucceed,
  getUsersFailed,
};
