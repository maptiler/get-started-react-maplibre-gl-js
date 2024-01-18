import React from 'react';
import { Source, Layer} from 'react-map-gl';

const PetrolPumpLayer = ({ data}) => {
  return (
    <Source type="geojson" data={data}>
      <Layer
        id="petrolPumpLayer"
        type="circle"
        paint={{
          "circle-radius": 10,
          "circle-color": "#4E3FC8",
          "circle-stroke-color": "#00000a",
          "circle-stroke-width": 5,
        }}
      />
    </Source>
  );
};

export default PetrolPumpLayer;
