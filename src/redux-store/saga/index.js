import userSaga from "./book";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([userSaga()]);
}
