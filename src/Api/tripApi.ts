// src/api/tripApi.ts

import axios from "axios";

// Base API URL
const BASE_URL = "http://127.0.0.1:8000/trips/api";

// Get Trips
export const getTrips = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trip/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trips:", error);
    throw error;
  }
};
