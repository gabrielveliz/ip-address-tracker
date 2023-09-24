import icono from "../images/icon-arrow.svg"
import React from "react";
import '../styles/Buscador.css';
import axios from "axios";

function Buscador({setPost,onBuscar}){

const buscar = () => {
    let dato= document.getElementById("contbusq").value;
    
    const baseURL = 'https://ipapi.co/'+dato+'/json/';
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      if(response.data.latitude!==undefined && response.data.longitude!==undefined)
      {onBuscar(response.data.latitude,response.data.longitude);}
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
        <h1>IP Address Tracker</h1>
      </div>
      <div className="barrabusqueda" onKeyDown={handleKeyDown}>
        <input id="contbusq"  type="text" placeholder="Search for any IP address or domain" />
        <button onClick={buscar}><img src={icono} alt="flecha" /></button>
      </div>
    </div>
  );
}

export default Buscador;
