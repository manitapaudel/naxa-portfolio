import { combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "@/views/projects/slice";

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
