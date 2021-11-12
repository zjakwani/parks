import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found
// Solution to react leaflet marker not rendering properly
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const Map = (props) => {
    
  const position = [Number(props.latitude), Number(props.longitude)]

  return (
    <div className="map__container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributorsz'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Tooltip>
                Location
            </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  )
};
  
export default Map;