import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProjectsFailure,
  fetchProjectsRequest,
  fetchProjectsSuccess,
} from "./slice";

function fetchApiData() {
  return fetch("https://admin.naxa.com.np/api/projects")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

// Worker saga
function* fetchDataSaga() {
  try {
    const data = yield call(fetchApiData);
    yield put(fetchProjectsSuccess(data)); // Dispatch success action
  } catch (error) {
    yield put(fetchProjectsFailure(error.message)); // Dispatch failure action
  }
}

// Watcher saga
export default function* watchFetchProjectsSaga() {
  yield takeLatest(fetchProjectsRequest.type, fetchDataSaga);
}
