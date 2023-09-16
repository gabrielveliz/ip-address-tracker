import React from 'react';
import '../styles/Info.css';
import axios from "axios";
import Maps from "./Maps";

function Info({ipb, setipb, post, setPost}){



  React.useEffect(() => {
/* traer datos de ipify */

    const baseURL = 'http://ip-api.com/json/' + ipb;
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [ipb]);

  if (!post) return null;

  let loca = post.city + ", " + post.region + ", "  + post.country ;
  let ip=post.query;
  let zone = post.timezone;
  let isp=post.isp;

  return(
    <>
    <div className="continfo">
      <div className='conttabla'>
        <div className='col borde'>
          <div className='titulotabla'><span>IP Address</span></div>
          <div className='datotabla'><span>{ip}</span></div>
        </div>
        <div className='col borde'>
          <div className='titulotabla'><span>Location</span></div>
          <div className='datotabla'><span>{loca}</span></div>
        </div>
        <div className='col borde'>
          <div className='titulotabla'><span>Timezone</span></div>
          <div className='datotabla'><span>UTC </span><span>{zone}</span></div>
        </div>
        <div className='col'>
          <div className='titulotabla'><span>ISP</span></div>
          <div className='datotabla'><span>{isp}</span></div>
        </div>
        
      </div>
    </div>
          <Maps 
          a={post.lat} 
          b={post.lon}
          />
      </>
  );
}

export default Info;