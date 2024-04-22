import Card from "react-bootstrap/Card";
import { IoSpeedometer } from "react-icons/io5";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoHappySharp } from "react-icons/io5";
import { IoLogoUsd } from "react-icons/io5";

import "./cards.scss";
import { Container } from "react-bootstrap";
export const Cards = () => {
  return (
    <Container>
      <h2 className="text-white">Beneficios</h2>
      <p className="pt-3 fs-4 d-flex justify-content-center">
        ¡Descubre los beneficios de trabajar con fabricantes directos!
      </p>
      <div className="d-lg-flex justify-content-between mt-5 gap-4">
        <Card className="cards col-lg-3 col-md-12 my-3">
          <IoSpeedometer className="cardIcons" />
          <Card.Body className="cardBody">
            <Card.Title className="fw-bold">Rapidez</Card.Title>
            <Card.Text className="cardDescription">
              Tenemos el mejor tiempo de respuesta y entrega.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards col-lg-3 col-md-12 my-3">
          <IoShieldCheckmarkSharp className="cardIcons" />
          <Card.Body className="cardBody">
            <Card.Title className="fw-bold">Seguridad</Card.Title>
            <Card.Text className="cardDescription">
              Tu seguridad es nuestra prioridad: calidad y confianza en cada
              lámina.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards col-lg-3 col-md-12 my-3">
          <IoHappySharp className="cardIcons" />
          <Card.Body className="cardBody">
            <Card.Title className="fw-bold">Servicio</Card.Title>
            <Card.Text className="cardDescription">
              El mejor servicio de expertos con años de experiencia en el sector.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards col-lg-3 col-md-12 my-3">
          <IoLogoUsd className="cardIcons" />
          <Card.Body className="cardBody">
            <Card.Title className="fw-bold">Precios competitivos</Card.Title>
            <Card.Text className="cardDescription">
              ¡Damos nuestro mejor precio desde la primera cotización!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
