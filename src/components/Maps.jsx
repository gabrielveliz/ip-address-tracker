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

const Maps =({a,b})=>{
  const position =[a,b];
  const position2 = [position[0]+0.000570,position[1]+0.000050]

  return(
    <>
    <MapContainer 
    center={position} 
    zoom={17} 
    scrollWheelZoom={false} 
    attributionControl={false}
    doubleClickZoom={false} 
    dragging={false}
    className='mapa' 
    zoomControl={false}>
      
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