import React from 'react';
import { MapContainer,TileLayer,Marker} from 'react-leaflet';
import '../styles/Maps.css';
import icono from "../images/icon-location.svg";
import L from 'leaflet';


const iconPerson = new L.Icon({
    iconUrl:icono,
    iconRetinaUrl: icono,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: 'leaflet-div-icon'
});

const Maps =({lat,lng})=>{
  const mapRef = React.useRef(null);

  const position2 = [lat+0.000570,lng+0.000050]

  React.useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.setView([lat, lng]);
    }
  }, [lat, lng]);
  return(
    <>
    <MapContainer 
    center={[lat,lng]} 
    zoom={17} 
    className='mapa' 
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position2} icon={iconPerson} >
    </Marker>
  </MapContainer>
  
  </>
    );
}

export default Maps;