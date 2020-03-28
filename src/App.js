import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import {myjson} from "./data/hospital.js";
import {myjson_two} from "./data/store.js";
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer'

function Map() {
  const [selectedH, setSelectedH] = useState(null);
  
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 34.052235, lng: -118.243683}}
    >
      
      {myjson.map(medical => (
        <Marker 
          key={medical.OBJECTID} 
          position={{
          lat: medical.latitude,
          lng: medical.longitude
          }}
          onClick={() => {
            setSelectedH(medical);
          }}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          }}
        />
      ))}

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
      
      {myjson_two.map(store => (
        <Marker
          key={store.NAICS}
          position={{
            lat: store.LOCATION[0],
            lng: store.LOCATION[1]
          }}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
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

