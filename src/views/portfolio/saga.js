import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProjectsFailure,
  fetchProjectsRequest,
  fetchProjectsSuccess,
} from "./slice";

const PROJECTS_URL = "https://admin.naxa.com.np/api/projects";

const fetchProjects = async () => {
  const response = await fetch(PROJECTS_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

// Worker saga
function* fetchDataSaga() {
  try {
    const data = yield call(fetchProjects);
    yield put(fetchProjectsSuccess(data)); // Dispatch success action
  } catch (error) {
    yield put(fetchProjectsFailure(error.message)); // Dispatch failure action
  }
}

// Watcher saga
export default function* watchFetchProjectsSaga() {
  yield takeLatest(fetchProjectsRequest.type, fetchDataSaga);
}
