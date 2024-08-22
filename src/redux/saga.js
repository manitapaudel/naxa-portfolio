// src/store/sagas/index.js
import { all } from "redux-saga/effects";
// import watchFetchDataSaga from "./exampleSaga";

export default function* rootSaga() {
  yield all([
    // watchFetchDataSaga(),
    // Add more sagas here
  ]);
}
