import bookProvider from "@data-access/book-provider";
import bookAction from "@action/book";
import type from "@constant";
import { call, put, select, takeLatest } from "redux-saga/effects";
const types = type.book;
function* fetchBooks() {
  const { limit, page } = yield select((state) => state.bookReducer);
  try {
    const res = yield call(bookProvider.search, { limit, page });
    yield put(bookAction.getSucceed(res.data));
  } catch (error) {
    yield put(bookAction.getFailed(error));
  }
}
export default function* userSaga() {
  yield takeLatest(types.GET_BOOK_REQUESTED, fetchBooks);
}
