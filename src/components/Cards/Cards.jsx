import Card from "react-bootstrap/Card";
import { IoSpeedometer } from "react-icons/io5";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoHappySharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

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
                Tenemos el mejor tiempo de respuesta y el mejor tiempo de entrega.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards col-lg-3 col-md-12 my-3">
            <IoShieldCheckmarkSharp className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Seguridad</Card.Title>
              <Card.Text className="cardDescription">
                Unicamente vendemos laminas de primera y de calidad certificada.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards col-lg-3 col-md-12 my-3">
            <IoHappySharp className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Servicio</Card.Title>
              <Card.Text className="cardDescription">
                Recibes el mejor servicio de expertos con años de experiencia en el sector.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards col-lg-3 col-md-12 my-3">
            <IoCart className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Facilidad de compra</Card.Title>
              <Card.Text className="cardDescription">
                Descripcion de compras o considerar cambiar el punto
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </Container>
  );
};
