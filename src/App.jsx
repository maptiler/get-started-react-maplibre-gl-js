import React, { useEffect, useState } from "react";
import Map, { NavigationControl, Marker, Popup } from "react-map-gl";
import Navbar from "./components/navbar.jsx";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import { fetchPetrolPumps } from "./utils/getPetrolPumps.jsx";
import PetrolPumpLayer from "./utils/PetrolPumps.jsx";
import LatLonToKM from "./utils/LatLonToKM.jsx";

function App() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [err, setError] = useState(null);
  const [petrolPoints, setPetrolPoints] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [newMap, setNewMap] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { coords } = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });

        // Fetch petrol points after obtaining geolocation data
        const points = await fetchPetrolPumps(latitude, longitude);
        const geoJSONPoints = {
          type: "FeatureCollection",
          features: points.map((point, index) => ({
            type: "Feature",
            id: index,
            properties: {
              Name: point.name,
            },
            geometry: {
              type: "Point",
              coordinates: [point.longitude, point.latitude],
            },
          })),
        };
        setPetrolPoints(geoJSONPoints);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (newMap) {
      const handleClick = (e) => {
        if (e.lngLat) {
          const coordinates = e.lngLat;
          console.log("Clicked Coordinates:", coordinates);
          const distance = LatLonToKM(
            e.lngLat.lat,
            e.lngLat.lng,
            location.latitude,
            location.longitude
          );
          setSelected({ distance, ...e.lngLat });
          console.log("Selected:", selected);
        }
      };
      const handleMouseEnter = () => {
        newMap.getCanvas().style.cursor = "pointer";
      };
      const handleMouseLeave = () => {
        newMap.getCanvas().style.cursor = "";
      };
      newMap.on("click", handleClick);
      newMap.on("mouseenter", handleMouseEnter);
      newMap.on("mouseleave", handleMouseLeave);
      return () => {
        newMap.off("click", handleClick);
        newMap.off("mouseenter", handleMouseEnter);
        newMap.off("mouseleave", handleMouseLeave);
      };
    }
  }, [newMap]);

  if (!location.latitude || !location.longitude) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => setActive(!active)}>See Resources</button>
      <Map
        mapLib={maplibregl}
        ref={(map) => setNewMap(map && map.getMap())}
        initialViewState={{
          longitude: location.longitude,
          latitude: location.latitude,
          zoom: 18,
        }}
        style={{ width: "100%", height: "calc(100vh - 70px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=iA9HLCM3T07uoASxQjnx"
      >
        <NavigationControl position="bottom-left" />
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          color="#0fcade"
        />
        {active && (
          <PetrolPumpLayer data={petrolPoints} onClick={(event) => {}} />
        )}
        {selected && (
          <Popup
            longitude={selected.lng}
            latitude={selected.lat}
            onClose={() => setSelected(null)}
          >
            <div>
              <h1>{selected.distance} Km away</h1>
              <p>Lat: {selected.lat}</p>
              <p>Lon: {selected.lng}</p>
              {/* <a
                 href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a> */}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default App;
