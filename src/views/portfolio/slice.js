import { createSlice } from "@reduxjs/toolkit";
import { extractUniqueCategories } from "../../utils";

const initialState = {
  data: [],
  uniqueCategories: [],
  keyHighlights: [],
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
      state.uniqueCategories = extractUniqueCategories(action.payload);
      state.keyHighlights = action.payload.filter(
        (item) => item.is_key_highlight
      );
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
