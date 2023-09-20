import icono from "../images/icon-arrow.svg"
import React from "react";
import '../styles/Buscador.css';
import axios from "axios";

function Buscador({setPost}){

const buscar = () => {
    let dato= document.getElementById("contbusq").value;
    
    const baseURL = 'http://ip-api.com/json/' + dato;
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      });
  }

  return(
    <div className="contbuscador">
      <div className="titulo">
        <span>IP Address Tracker</span>
      </div>
      <div className="barrabusqueda">
        <input id="contbusq"  type="text" placeholder="Search for any IP address or domain" />
        <button onClick={buscar}><img src={icono} alt="flecha" /></button>
      </div>
    </div>
  );
}

export default Buscador;