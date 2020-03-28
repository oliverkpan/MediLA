import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { myjson } from "./data/hospital.js";

function Map() {
  console.log("id ", process.env.REACT_APP_GOOGLE_KEY);
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
    >
      {myjson.map(medical => (
        <Marker
          key={medical.OBJECTID}
          position={{
            lat: medical.latitude,
            lng: medical.longitude
          }}
          onClick={() => {
            setSelectedPark(medical);
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.latitude,
            lng: selectedPark.longitude
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>park details</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
          ${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
