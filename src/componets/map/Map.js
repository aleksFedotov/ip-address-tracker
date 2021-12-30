import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import iconmonstrlocation from '../../images/iconmonstrlocation.png';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: iconmonstrlocation,
  iconSize: [47, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -46],
});

const CenterView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <main className="map-container">
      <MapContainer
        zoomControl={false}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <CenterView center={position} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <br /> This Ip address has got me here!
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default Map;
