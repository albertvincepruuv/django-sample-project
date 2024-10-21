import React from "react";

import { useAppSelector } from "../hooks";
import { RootState } from "../Stores/store";
import { Trip } from "../Types/types";

const TripTable = () => {
  const trips: Trip[] = useAppSelector((state: RootState) => state.trips.trips);

  return (
    <table
      className="table table-striped table-sm"
      style={{
        width: "100%",
        marginLeft: "30px",
        marginRight: "10px",
        marginTop: "20px"
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Start Station Name</th>
          <th>End Station Name</th>
          <th>Trip Duration</th>
        </tr>
      </thead>
      <tbody>
        {trips.length === 0 ? (
          <tr>
            <td colSpan={4}>No trips available</td>
          </tr>
        ) : (
          trips.map((trip) => (
            <tr key={trip.trip_id}>
              <td>{trip.trip_id}</td>
              <td style={{ textAlign: "left" }}>{trip.start_station_name}</td>
              <td style={{ textAlign: "left" }}>{trip.end_station_name}</td>
              <td>
                {new Date(trip.tripduration).toTimeString().split(" ")[0]}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TripTable;
