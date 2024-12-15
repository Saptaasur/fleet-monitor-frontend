import React, { useEffect, useState } from "react";
import axios from "axios";
import RobotCard from "./components/RobotCard";
import MapView from "./components/MapView";
import "./App.css"; // Importing styles

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/robots");
      setRobots(res.data.robots);
    };

    fetchData();

    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRobots(data.robots);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="dashboard">
      <h1>Fleet Monitoring Dashboard</h1>
      <div className="content">
        <div className="robot-list">
          {robots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </div>
        <div className="map-container">
          <MapView robots={robots} />
        </div>
      </div>
    </div>
  );
}

export default App;
