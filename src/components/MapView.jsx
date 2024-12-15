import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

const MapView = ({ robots }) => {
  return (
    <div className="map-wrapper">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {robots.map((robot) => (
          <Marker key={robot.id} position={robot.location}>
            <Popup>
              <strong>{robot.id}</strong>
              <br />
              Location: {robot.location.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
