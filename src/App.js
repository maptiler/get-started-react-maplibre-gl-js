import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: "100vh"}}
        mapStyle="https://api.maptiler.com/maps/basic/style.json?key=YOUR_MAPTILER_API_KEY_HERE"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default App;
