import { fetchUsers as _fetchUsers } from "../../data-access/book-provider";
import * as actions from "../action";
import types from "../../constant";
import { call, put, takeEvery } from "redux-saga/effects";
function* fetchUsers() {
  try {
    const res = yield call(_fetchUsers);
    yield put(actions.getUsersSucceed(res));
  } catch (error) {
    yield put(actions.getUsersFailed(error));
  }
}
export default function* userSaga() {
  yield takeEvery(types.GET_USER_REQUESTED, fetchUsers);
}
