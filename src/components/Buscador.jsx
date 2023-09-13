import icono from "../images/icon-arrow.svg"
/* import axios from "axios";*/
import React from "react";
import '../styles/Buscador.css';


/*
var ip = '186.107.40.233';
var api_key = 'at_9l3N2tCsVkgAUAg0QCccpiuKdC7y7';
var api_url = 'https://geo.ipify.org/api/v2/country?';

const baseURL = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
*/

function Buscador(){
  /*
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  */

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