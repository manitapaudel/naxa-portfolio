import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjectsRequest(state) {
      state.loading = true;
    },
    fetchProjectsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProjectsFailure(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} = projectsSlice.actions;
export default projectsSlice.reducer;
