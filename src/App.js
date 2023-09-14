import './App.css';
import Buscador from "./components/Buscador";
import Maps from "./components/Maps";
import Info from "./components/Info";
import Foot from "./components/Foot";
import React, { useState } from "react";
import axios from "axios";



function App() {
  
  const [post, setPost] = React.useState(null);
  const [ipb, setipb] = useState("");
  
  /* obtener ip publica */

const URL_API = "https://api.ipify.org/?format=json";
fetch(URL_API)
.then(respuestaRaw => respuestaRaw.json())
.then(respuesta => {
  setipb(respuesta.ip);
});

/* traer datos de ipify */
var api_key = 'at_9l3N2tCsVkgAUAg0QCccpiuKdC7y7';
var api_url = 'https://geo.ipify.org/api/v2/country,city?';
const baseURL = api_url + 'apiKey=' + api_key + '&ipAddress=' + ipb;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let loca = post.location.city + ", " + post.location.region + ", " + post.location.country ;

  return (
    <div className='contenedor'>

      <Buscador ipb={ipb} setipb={setipb}/>
      <Info 
        ip={post.ip} 
        loca={loca}
        zone = {post.location.timezone}
        isp={post.isp}
        />
      <Maps 
        a={post.location.lat} 
        b={post.location.lng}
        />
      <Foot/>
    </div>
    
  );
}

export default App;
