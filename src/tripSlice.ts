// src/redux/tripsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrips } from "./Api/tripApi";
import { Trip } from "./Types/types";

// Define the state type
interface TripsState {
  trips: Trip[];
  loading: boolean;
}

// Initial state
const initialState: TripsState = {
  trips: [],
  loading: false
};

// Async thunk to fetch trips
export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () => {
  const response = await getTrips();
  return response;
});

// Create slice
const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.trips = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrips.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default tripsSlice.reducer;
