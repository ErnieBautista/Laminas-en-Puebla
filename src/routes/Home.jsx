import { Beneficios } from "../components/Beneficios/Beneficios";
import { Bienvenidos } from "../components/Bienvenidos/Bienvenidos";
import { Cards } from "../components/Cards/Cards";
import { Carrusel } from "../components/Carrusel/Carrusel";
import { Footer } from "../components/Footer/Footer";
import { Galeria } from "../components/Galeria/Galeria";
import { Nosotros } from "../components/Nosotros/Nosotros";
import { Soluciones } from "../components/Soluciones/Soluciones";

export const Home = () => {
  return (
    <div>
      <Bienvenidos />
      <div className="containerCards">
        <Cards />
      </div>
      <Soluciones />
      <Beneficios />
      <Carrusel id="carrusel" />
      <Galeria />
      <Nosotros />
      <Footer />
    </div>
  );
};
