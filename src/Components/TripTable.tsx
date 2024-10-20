import React from "react";

type Trip = {
  trip_id: number;
  tripduration: Date;
  start_station_name: string;
  end_station_name: string;
};

type TripTableProps = {
  trips: Trip[];
};

const TripTable: React.FC<TripTableProps> = ({ trips }) => {
  return (
    <table border={1} style={{ width: "100%", marginTop: "20px" }}>
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
              <td>{trip.start_station_name}</td>
              <td>{trip.end_station_name}</td>
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
