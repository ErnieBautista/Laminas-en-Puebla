import React from 'react'
import "./bienvenidos.css";
import MaquinaVid from "../../assets/videos/LaminasVid.mp4"
import Logo from "../../assets/imgs/Logo Laminas.png"

export const Bienvenidos = () => {
  return (
    <div className='vid my-0 py-0'>
        <video
        src={MaquinaVid}
        muted
        autoPlay
        loop
        className='my-0 py-0'>
        </video>
    </div>
  )
}

