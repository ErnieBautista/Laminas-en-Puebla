import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import LaminasRoladas from "../../assets/imgs/Laminas Roladas.jpg";
import MaquinaRN100 from "../../assets/imgs/Maquina RN-100.jpg";
import MaquinaKR_18 from "../../assets/imgs/Maqunia KR-18 4.jpg";
import Grua from "../../assets/imgs/Grua.jpg";
import "./carrusel.scss";

export const Carrusel = () => {
  
  return (
    <Carousel id="/">
      <Carousel.Item>
      <img className="CarusselImg crop3" src={MaquinaRN100} alt="Arcotecho" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h1>¡Bienvenidos a LaminasEnPuebla.Com!</h1>
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarusselImg crop3" src={MaquinaRN100} alt="Arcotecho" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2>Materializamos tus proyectos</h2>
            <p className="CarusselText">
              Materializamos tus proyectos protegiendo tu inversión.
            </p>
            <br />
            <Button href="/#contactanos" className="mt-1" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg crop1"
          src={MaquinaKR_18}
          alt="Techo sin estructura"
        />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2>Tenemos experiencia</h2>
            <p className="CarusselText">
              Hemos perfeccionado la técnica y la metodología para diseñar e
              instalar techos curvos de alta calidad.
            </p>
            <br />
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg crop2"
          src={Grua}
          alt="Estructura metalica"
        />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="carruselEstructura fs-1">Estamos comprometidos</h2>
            <p className="carruselEstructura fs-4">
              Desde la selección cuidadosa de materiales hasta la entrega de
              nuestros productos y servicios, nos esforzamos por superar las
              expectativas de nuestros clientes.
            </p>
            <br />
            <Button href="/#contactanos" className="mt-5" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
