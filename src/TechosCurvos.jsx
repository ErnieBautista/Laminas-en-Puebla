import { Outlet } from "react-router-dom";
import { Contactanos } from "./components/Contactanos/Contactanos";
import NavBar from "./components/NavBar/NavBar";
import Whatsapp from "./components/Whatsapp/Whatsapp";

export const TechosCurvos = () => {
  return (
    <>
      <Contactanos />
      <NavBar />
      <Whatsapp />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
