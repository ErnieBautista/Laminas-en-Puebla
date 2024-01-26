import React from 'react'
import "./bienvenidos.css";
import MaquinaVid from "../../assets/videos/LaminasVid.mp4"

export const Bienvenidos = () => {
  return (
    <div className='vid'>
        <video
        src={MaquinaVid}
        muted
        autoPlay
        loop>
        </video>
    </div>
  )
}

