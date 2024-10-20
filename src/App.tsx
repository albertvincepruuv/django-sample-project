import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTrips } from "./Api/tripApi";
import TripTable from "./Components/TripTable";

function App() {
  const [trips, setTrips] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchTrips = async () => {
    setLoading(true);
    const tripsResponse = await getTrips();
    setTrips(tripsResponse);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <TripTable trips={trips} />
        )}
      </header>
    </div>
  );
}

export default App;
