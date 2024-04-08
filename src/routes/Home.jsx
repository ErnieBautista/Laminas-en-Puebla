import { Beneficios } from "../components/Beneficios/Beneficios";
import { Bienvenidos } from "../components/Bienvenidos/Bienvenidos";
import { Cards } from "../components/Cards/Cards";
import { Carrusel } from "../components/Carrusel/Carrusel";
import { Footer } from "../components/Footer/Footer";
import { Links } from "../components/Links/Links";
import { Soluciones } from "../components/Soluciones/Soluciones";
import { Formulario } from "../components/Formulario/Formulario"

export const Home = () => {
  return (
    <div>
      <Bienvenidos />
      <Soluciones />
      <Beneficios />
      <div className="containerCards">
        <Cards />
      </div>
      <Carrusel id="carrusel" />
      <Formulario />
      <Links />
      <Footer />
    </div>
  );
};
