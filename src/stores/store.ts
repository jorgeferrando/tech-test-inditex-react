import { configureStore } from "@reduxjs/toolkit";
import podcasts from "./podcast.slice";

const store = configureStore({
  reducer: {
    podcasts,
  },
});

export default store;
