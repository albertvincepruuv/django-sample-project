// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "../tripSlice";

const store = configureStore({
  reducer: {
    trips: tripsReducer
  }
});

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
