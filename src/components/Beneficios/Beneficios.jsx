import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./beneficios.css";
import LaminaLisa from "../../assets/imgs/Rollos de lamina Hor mod.png";
import RN100 from "../../assets/imgs/RN-100 internet.webp";
import LaminaKR_18 from "../../assets/imgs/Lamina KR-18.webp";
import Losacero from "../../assets/imgs/Losacero internet.webp";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const Beneficios = () => {
  const [currentLink, setCurrentLink] = useState("#link1");
  const dynamicTabs = () => {
    setTimeout(() => {
      setCurrentLink("#link2");
    }, 1000);
  };
  useEffect(() => {
    dynamicTabs();
  }, []);

  return (
    <Container className="catalogo">
      <div className="my-5">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey={currentLink}
        >
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item variant="secondary" action href="#link1">
                  Rollos de lamina
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link2">
                  RN-100
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link3">
                  KR-18
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link4">
                  Losacero
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    <h5>¡Manejamos solo material de primera!</h5>
                    <ul>
                      <li>
                        Zintroalum - láminas de acero recubiertas con una capa
                        de aleación de zinc y aluminio que proporcionan una
                        mayor resistencia a la corrosión que las láminas de
                        acero galvanizado estándar recubiertas sólo con zinc.
                      </li>
                      <li>
                        Pintro - láminas de acero recubiertas con una capa de
                        zinc y posteriormente pintadas, combinan la estética con
                        protección adicional contra la corrosión.
                      </li>
                    </ul>
                  </div>
                  <img
                    className="BeneficiosImg"
                    src={LaminaLisa}
                    alt="Techo sin estructura"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2" className="px-5">
                  <div>
                    <p className="my-3 beneficiosDescripcion">
                      Lamina recta engargolable que se utiliza en techos de 1 o 2
                      aguas y timpanos. Poder cubriente de 100cm
                    </p>
                    <img className="laminas" src={RN100} alt="" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3" className="px-5">
                  <div>
                    <p className="my-3 beneficiosDescripcion">
                      Lamina recta engargolable que se utiliza en techos de 1 o 2
                      aguas y timpanos. Poder cubriente de 45.7cm
                    </p>
                    <img className="kr18IMG" src={LaminaKR_18} alt="" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4" className="px-5">
                  <div>
                    <p className="my-3 beneficiosDescripcion">
                      Láminas de acero galvanizado que ofrece una combinación de
                      resistencia, ligereza y versatilidad, ideal para
                      entrepisos y techos.
                    </p>
                    <img className="laminas" src={Losacero} alt="" />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};
