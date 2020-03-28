import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import * as hospitalData from "./data/hospital.json";

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 34.052235, lng: -118.243683}}
    >
      {hospitalData.map(medical => (
        <Marker 
          key={medical.OBJECTID} 
          position={{
          lat: medical.latitude,
          lng: medical.longitude
          }}
        />
      ))}
    </GoogleMap> 
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
          ${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

