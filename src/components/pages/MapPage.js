import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import { myjson } from "../../data/hospital.js";
import { myjson_two } from "../../data/store.js";

function Map() {
  var selectedChoice = localStorage.getItem("selectedChoice");
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedH, setSelectedH] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
    >
      {myjson.map(
        medical =>
          selectedChoice === "hospital" && (
            <Marker
              key={`medical-${medical.OBJECTID}`}
              position={{
                lat: medical.latitude,
                lng: medical.longitude
              }}
              onClick={() => {
                setSelectedH(medical);
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
              }}
            />
          )
      )}

      {selectedH && (
        <InfoWindow
          position={{
            lat: selectedH.latitude,
            lng: selectedH.longitude
          }}
          onCloseClick={() => {
            setSelectedH(null);
          }}
        >
          <div>
            <h2>{selectedH.Name}</h2>
            <p>{selectedH.link}</p>
          </div>
        </InfoWindow>
      )}

      {myjson_two.map(
        store =>
          selectedChoice === "toilet paper" && (
            <Marker
              key={`store-${store["LOCATION ACCOUNT #"]}`}
              position={{
                lat: store.LOCATION[0],
                lng: store.LOCATION[1]
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              }}
            />
          )
      )}
    </GoogleMap>
  );
}

export const MapPage = () => {
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
  ${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<CircularProgress variant="indeterminate" />}
      // loadingElement={<div style={{ height: "100vh" }} />}
      containerElement={<LoadingContainer />}
      // containerElement={<div style={{ height: "100vh" }} />}
      mapElement={<div style={{ height: "100vh" }} />}
    />
  );
};

const LoadingContainer = styled.div`
  background-color: #dcdcdc;
  height: 100vh;
  width: 100%;
`;
