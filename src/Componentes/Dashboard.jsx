import React from "react";
import ImageDisplay from "./ImageDisplay";
const Dashboard = () => {
  return (
    <div>
      <h1>Api de generador de imagenes random</h1>
      <div className="centrado">
        <ImageDisplay />
      </div>
    </div>
  );
};

export default Dashboard;
