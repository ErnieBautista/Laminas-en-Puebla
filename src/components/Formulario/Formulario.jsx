import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { RiMailUnreadFill } from "react-icons/ri";
import "./formulario.scss";

export const Formulario = () => {
  return (
    <Container id="contactanos" className="text-center pb-5 my-5">
      <h2 className="pb-5">¡Te cotizamos sin compromiso!</h2>
      <Row className="d-flex justify-content-center">
        <Col lg="5" xs="12" className="pt-4">
          <RiMailUnreadFill className="fs-3 mb-3" />
          <h3 className="fw-bold pb-1 fs-4">CONTACTO</h3>
          <div>
            Nuestro horario de oficina es de:
            <br />
            Lunes a Viernes 09:00 - 18:00
            <br />
            Sábados 09:00 - 14:00
          </div>
          <div className="links">
            <div>
              Email:{" "}
              <a
                className="text-primary"
                href="mailto:laminasenpuebla.com@gmail.com?subject=Quiero una cotizacion por favor&body=Nombre:%0ACel con Whatsapp:%0A¿Qué perfil de laminas te interesa comprar?:%0A¿Cuántas láminas requieres?¿De que medidas?:%0A¿Requieres servicio de flete?:%0A¿Donde necesitas que se entreguen?:"
              >
                laminasenpuebla.com@gmail.com
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <br />
            <FaPhone className="fs-3" />
            <h3 className="fw-bold pb-1 fs-5 mt-3">¡LLAMANOS!</h3>

            <a className="text-primary" href="tel:+522228071373">
              Tel. Puebla (222) 807 13 73
            </a>
            <br />
            <a className="text-primary" href="tel:2222367188">
              (222) 236 71 88
            </a>
            <br />
            <Button
              className="text-white my-3"
              href="https://api.whatsapp.com/send?phone=5212212588979&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
              variant="success"
              target="_blank"
            >
              Mandar Whatsapp <IoLogoWhatsapp />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
