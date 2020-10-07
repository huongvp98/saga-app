import type from "@constant";
const types = type.book;
const getRequested = () => {
  return {
    type: types.GET_BOOK_REQUESTED,
  };
};
const getSucceed = (payload) => {
  return {
    type: types.GET_BOOK_SUCCEED,
    payload: payload,
  };
};
const getFailed = (error) => {
  return {
    type: types.GET_BOOK_FAILED,
    payload: {
      error,
    },
  };
};
const updateState = (payload) => {
  return {
    type: types.UPDATE_BOOK,
    payload: payload,
  };
};
const createOrEdit = (payload) => {
  return {
    type: types.CREATE_OR_EDIT_BOOK,
    payload: payload,
  };
};
export default {
  getRequested,
  getSucceed,
  getFailed,
  updateState,
  createOrEdit,
};
