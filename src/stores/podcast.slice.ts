import { createSlice } from "@reduxjs/toolkit";

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    loading: false,
    selectedPodcast: null,
    podcastDetails: null,
    selectedEpisode: null,
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
    },
    selectEpisode: (state, action) => {
      state.selectedEpisode = action.payload;
    },
  },
});
export const {
  setLoading,
  selectPodcast,
  selectEpisode,
  setPodcastDetails
} = podcastSlice.actions;
export default podcastSlice.reducer;
