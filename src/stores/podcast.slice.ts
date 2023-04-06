import { createSlice } from "@reduxjs/toolkit";

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    loading: false,
    selectedPodcast: null,
    podcastDetails: null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    selectPodcast: (state, action) => {
      state.selectedPodcast = action.payload;
    },
    setPodcastDetails: (state, action) => {
      state.podcastDetails = action.payload;
    }
  },
});
export const {
  setLoading,
  selectPodcast,
  setPodcastDetails
} = podcastSlice.actions;
export default podcastSlice.reducer;
