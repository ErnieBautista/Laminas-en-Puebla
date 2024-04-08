import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./links.css";

export const Links = () => {
  return (
    <div className="extTraffic">
      <Container fluid className="mx-0 py-4">
        <Row className="py-4">
          <Col className="pb-5">
            <h4 className="fs-4">¿Necesitas la instalación de un arcotecho?</h4>
            <br />
            <a className="extLinks" href="https://techoscurvos.com/">
              techoscurvos.com
            </a>
          </Col>
          <Col>
            <h4 className="fs-4">¿Te interesa rentar una máquina roladora?</h4>
            <br />
            <a className="extLinks" href="https://www.maquinasuperspan.com/">maquinasuperspan.com</a>
          </Col>
        </Row>
        <Row>
          <h3 className="pt-4">SÍGUENOS</h3>
          <Col className="text-center">
            <a
              href="https://www.facebook.com/techoscurvoss"
              target=" _blank"
              className="px-1 fs-3"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
              target=" _blank"
              className="px-1 fs-3"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/techoscurvos/?hl=es"
              target=" _blank"
              className="px-1 fs-3"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/techos-curvos-com/about/"
              target=" _blank"
              className="px-1 fs-3"
            >
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
