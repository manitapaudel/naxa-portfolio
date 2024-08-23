import { combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "@/views/portfolio/slice";

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
