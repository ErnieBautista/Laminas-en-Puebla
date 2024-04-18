import React from "react";
import "./bienvenidos.css";
import MaquinaVid from "../../assets/imgs/Gif-480-opt.gif";
import Logo from "../../assets/imgs/laminas logo bordes blancos.webp";

export const Bienvenidos = () => {
  return (
    <div className="bienvenida">
      <div className="vid my-0 py-0">
        <img src={MaquinaVid} className="my-0 py-0"></img>
      </div>
      <div className="texto">
        <img src={Logo} alt="" className="logo" />
      </div>
    </div>
  );
};
