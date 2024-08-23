import { all } from "redux-saga/effects";

import watchFetchProjectsSaga from "@/views/portfolio/saga";

export default function* rootSaga() {
  yield all([watchFetchProjectsSaga()]);
}
