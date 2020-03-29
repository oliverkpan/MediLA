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

import firebase from "firebase";
import { makeid } from "./helpers";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDnYn_55Fxu5meXkjNN6awzJTZwb3-fwbI",
    authDomain: "lahacksteam-86084.firebaseapp.com",
    databaseURL: "https://lahacksteam-86084.firebaseio.com",
    projectId: "lahacksteam-86084",
    storageBucket: "lahacksteam-86084.appspot.com",
    messagingSenderId: "182070089013",
    appId: "1:182070089013:web:278daaeb65cec49e8a287c",
    measurementId: "G-4YT56H5DCW"
  });
}

const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("favorites");

export const addTodo = newTodo => {
  todosRef.push().set(newTodo);
};

function Map() {
  var selectedChoice = localStorage.getItem("selectedChoice");
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedH, setSelectedH] = useState(null);
  const [selectedS, setSelectedS] = useState(null);

  const isFavorite = store => {
    myjson_two.map(s => s["LOCATION ACCOUNT #"]).includes(store["favoriteId"]);
  };

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
              onCloseClick={() => {
                setSelectedH(null);
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

      {selectedS && selectedS?.LOCATION && (
        <InfoWindow
          position={{
            lat: selectedS.LOCATION[0],
            lng: selectedS.LOCATION[1]
          }}
          onCloseClick={() => {
            setSelectedS(null);
          }}
        >
          <div>
            <h2>
              {isFavorite(selectedS) ? "(Favorite) " : ""}
              {selectedS["BUSINESS NAME"]}
            </h2>
            <p>{selectedS["NAICS"]}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={e => {
                e.preventDefault();
                addTodo({
                  favoriteId: selectedS["LOCATION ACCOUNT #"],
                  businessName: selectedS["BUSINESS NAME"]
                });
              }}
            >
              Add to favorites
            </Button>
          </div>
        </InfoWindow>
      )}

      {myjson_two.map(
        store =>
          selectedChoice === "toilet paper" && (
            <Marker
              key={makeid()}
              position={{
                lat: store.LOCATION[0],
                lng: store.LOCATION[1]
              }}
              onClick={() => {
                setSelectedS(store);
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
  const [open, setOpen] = useState(true);
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
  ${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<CircularProgress variant="indeterminate" />}
        loadingElement={<div style={{ height: "100vh" }} />}
        containerElement={<LoadingContainer />}
        // containerElement={<div style={{ height: "100vh" }} />}
        mapElement={<div style={{ height: "100vh" }} />}
      />
    </>
  );
};

const LoadingContainer = styled.div`
  background-color: #dcdcdc;
  height: 100vh;
  width: 100%;
`;
