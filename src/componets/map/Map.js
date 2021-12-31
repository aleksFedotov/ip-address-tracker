import React, { useContext } from 'react';
import Spinner from '../ui/spinner/Spinner';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from 'react-leaflet';

import TrackerCotext from '../../store/tracker-context';

import iconmonstrlocation from '../../images/iconmonstrlocation.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: iconmonstrlocation,
  iconSize: [47, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -46],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = () => {
  const trackerCtx = useContext(TrackerCotext);

  const position = trackerCtx.location;

  return (
    <main>
      {trackerCtx.ipAddress && (
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100vw' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          <ChangeView center={position} zoom={15} />

          <Marker position={position} icon={markerIcon}>
            <Popup></Popup>
          </Marker>
        </MapContainer>
      )}
    </main>
  );
};

export default Map;
