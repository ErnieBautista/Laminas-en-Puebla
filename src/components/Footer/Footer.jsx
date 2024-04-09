import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="pt-3">
        <Row>
          <Col className="text-center">
            <FaRegCopyright /> Copyright Laminas en Puebla .Com 2024
          </Col>
          <Col className="text-center" lg={6}>
            <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
          </Col>
        
        </Row>
      </Container>
    </div>
  );
};
