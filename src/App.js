import './App.css';
import Buscador from "./components/Buscador";

import Info from "./components/Info";
import Foot from "./components/Foot";
import React, { useState } from "react";


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
    
  /*156.254.5.4 ip para pruebas */
  return (
    <div className='contenedor'>

      <Buscador ipb={ipb} setipb={setipb} />
      <Info ipb={ipb} setipb={setipb}
        post={post} setPost={setPost}/>
      <Foot/>
    </div>
    
  );
}

export default App;
