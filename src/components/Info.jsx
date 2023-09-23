import React from 'react';
import '../styles/Info.css';

function Info({post}){
  let loca = post.city + ", " + post.region + ", "  + post.country ;
  let ip=post.ip;
  let zone = post.utc_offset;
  let isp=post.org;


  if(post.latitude===undefined && post.longitude===undefined)
  {
    console.log(post)
    loca = "Not found" ;
    zone = "--";
    isp="--";

    if(post.reason==="Invalid IP Address"){
      ip="Invalid";
      isp="Invalid";
    }

    if(post.reason==="Reserved IP Address"){
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