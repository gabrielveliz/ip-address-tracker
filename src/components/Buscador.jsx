import icono from "../images/icon-arrow.svg"
import React from "react";
import '../styles/Buscador.css';
import axios from "axios";

function Buscador({setPost,onBuscar}){

const buscar = () => {
    let dato= document.getElementById("contbusq").value;
    
    const baseURL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_OJw19SRXpHGnmjy5JBfAMT55jpkdw&ipAddress=' + dato;
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      
      if(response.data.location.lat!==undefined && response.data.location.lng!==undefined)
      {onBuscar(response.data.location.lat,response.data.location.lng);}
    });
  }
  const handleKeyDown = event => {
    
          if(event.key==="Enter"){
            buscar();
          }
            
  };
  return(
    <div className="contbuscador">
      <div className="titulo">
        <span>IP Address Tracker</span>
      </div>
      <div className="barrabusqueda" onKeyDown={handleKeyDown}>
        <input id="contbusq"  type="text" placeholder="Search for any IP address or domain" />
        <button onClick={buscar}><img src={icono} alt="flecha" /></button>
      </div>
    </div>
  );
}

export default Buscador;