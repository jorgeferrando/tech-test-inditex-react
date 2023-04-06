import { configureStore } from "@reduxjs/toolkit";
import loader from "./podcast.slice";

const store = configureStore({
  reducer: {
    loader,
  },
});

export default store;
