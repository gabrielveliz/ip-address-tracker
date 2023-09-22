import React from 'react';
import '../styles/Info.css';

function Info({post}){
  let loca = post.location.city + ", " + post.location.region + ", "  + post.location.country ;
  let ip=post.ip;
  let zone = post.location.timezone;
  let isp=post.isp;


  if(post.location.lat===undefined && post.location.lng===undefined)
  {

    loca = "Not found" ;
    zone = "--";
    isp="--";

    if(post.message==="invalid query"){
      ip="Invalid";
      isp="Invalid";
    }
    if(post.message==="private range"){
      isp="Private range";
    }
    if(post.message==="reserved range"){
      isp="Reserved range";
    }

  }
  

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
      </>
  );
}

export default Info;