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
  const [mapas, setMapas] = useState([]);
  const [contador, setContador] = useState(0);
  
  const onBuscar = (lat, lng) => {
    const nuevoMapa = {
      lat,
      lng,
      zoom: 13,
      id: contador,
    };
    setMapas([...mapas, nuevoMapa]);
    setContador(contador + 1);
  };
  
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
            onBuscar(response.data.lat,response.data.lon)
          });
        }, []);

        if (!post) return null;


  return (
    <div className='contenedor'>

      <Buscador setPost={setPost} onBuscar={onBuscar} />
      <Info post={post}/>
      {mapas.map((mapa) => (
        <Maps key={mapa.id} {...mapa} />
      ))}
      <Foot/>
    </div>
    
  );
}

export default App;