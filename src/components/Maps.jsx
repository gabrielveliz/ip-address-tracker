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

const Maps =({post})=>{

  const position2 = [post.lat+0.000570,post.lon+0.000050]

  return(
    <>
    <MapContainer 
    center={[post.lat,post.lon]} 
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