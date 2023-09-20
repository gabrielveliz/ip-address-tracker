import './App.css';
import Buscador from "./components/Buscador";
import Info from "./components/Info";
import Foot from "./components/Foot";
import React, { useState } from "react";
import Maps from "./components/Maps";
import axios from "axios";

function App() {
  const [post, setPost] = useState(null);
  const [ipb, setipb] = useState("");

  
  
    /* obtener ip publica */
    const URL_API = "https://api.ipify.org/?format=json";
    fetch(URL_API)
    .then(respuestaRaw => respuestaRaw.json())
    .then(respuesta => {
      setipb(respuesta.ip);
    });
    
    React.useEffect(() => {
      /* traer datos de ipify */
          const baseURL = 'http://ip-api.com/json/' + ipb;
          axios.get(baseURL).then((response) => {
            setPost(response.data);
          });
        }, []);

        if (!post) return null;


  return (
    <div className='contenedor'>

      <Buscador setPost={setPost}  />
      <Info post={post}/>
      <Maps post={post}/>
      <Foot/>
    </div>
    
  );
}

export default App;
