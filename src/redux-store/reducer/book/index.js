import type from "@constant";
const types = type.book;
const initialState = {
  loading: false,
  error: null,
  listBook: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOK_REQUESTED:
      return {
        ...state,
        loading: true,
        listBook: [],
        error: null,
      };
    case types.GET_BOOK_SUCCEED:
      return {
        ...state,
        loading: false,
        listBook: action.payload,
        error: null,
      };
    case types.GET_BOOK_FAILED:
      return {
        ...state,
        loading: false,
        listBook: [],
        error: action.payload.error,
      };
    case types.UPDATE_BOOK:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    case types.CREATE_OR_EDIT_BOOK:
      return {
        ...state,
        loading: true,
        error: null,
        bookInfor: action.payload,
      };
    default:
      return state;
  }
};
