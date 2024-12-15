import React from "react";
import "../App.css";
import RobotCard from "./RobotCard";
import robotsData from "./robots.json"; // Import JSON data

const App = () => {
  return (
    <div className="App">
      <h1>Robot Status</h1>
      {robotsData.map((robot) => (
        <RobotCard key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default App;
