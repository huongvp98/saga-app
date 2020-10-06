import bookProvider from "@data-access/book-provider";
import bookAction from "@action/book";
import types from "@constant";
import { call, put, select, takeLatest } from "redux-saga/effects";
function* fetchUsers() {
  const { limit, page } = yield select((state) => state.bookReducer);
  try {
    const res = yield call(bookProvider.search, { limit, page });
    yield put(bookAction.getUsersSucceed(res.data));
  } catch (error) {
    yield put(bookAction.getUsersFailed(error));
  }
}
export default function* userSaga() {
  yield takeLatest(types.GET_USER_REQUESTED, fetchUsers);
}
