import { all } from "redux-saga/effects";

import watchFetchProjectsSaga from "@/views/projects/saga";

export default function* rootSaga() {
  yield all([watchFetchProjectsSaga()]);
}
