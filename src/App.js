import './App.css';
import Buscador from "./components/Buscador";
import Maps from "./components/Maps";
import Info from "./components/Info";
import Foot from "./components/Foot";


let a = -33.5481505;
let b = -70.6426921;
let ip="192.212.174.101";
let loca = "Brooklyn,NY";
let zone = "-05:00";
let isp = "Space X Starlink";

function App() {
  return (
    <div className='contenedor'>
      <Buscador></Buscador>
      <Info 
        ip={ip} 
        loca={loca}
        zone = {zone}
        isp={isp}
        />
      <Maps 
        a={a} 
        b={b}
        />
      <Foot/>
    </div>
    
  );
}

export default App;
