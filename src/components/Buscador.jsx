import icono from "../images/icon-arrow.svg"
import React from "react";
import '../styles/Buscador.css';

function Buscador(){

  return(
    <div className="contbuscador">
      <div className="titulo">
        <span>IP Address Tracker</span>
      </div>
      <div className="barrabusqueda">
        <input type="text" placeholder="Search for any IP address or domain" />
        <button><img src={icono} alt="flecha" /></button>
      </div>
    </div>
  );
}

export default Buscador;