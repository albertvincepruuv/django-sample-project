// src/App.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import logo from "./logo.svg";
import "./App.css";
import TripTable from "./Components/TripTable";
import { fetchTrips } from "./tripSlice";

function App() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <TripTable />
        )}
      </header>
    </div>
  );
}

export default App;
