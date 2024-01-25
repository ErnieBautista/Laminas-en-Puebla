import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./beneficios.css";
import RN100 from "../../assets/imgs/RN-100 editado.jpg";
import Arcotecho6 from "../../assets/imgs/Arcotecho despues 4 6-10-2023.webp";
import LaminaKR_18 from "../../assets/imgs/KR-18 2.jpg";
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
    <Container>
      <div className="my-5">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey={currentLink}
        >
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item variant="secondary" action href="#link1">
                  Lamina lisa
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link2">
                  RN-100
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link3">
                  KR-18
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Nuestros arcotechos proporcionan soluciones versátiles y
                    resistentes para una variedad de aplicaciones, desde
                    canchas, almacenes industriales hasta espacios comerciales.
                    Al trabajar con nosotros aseguramos durabilidad, diseño estético y funcionalidad.
                    Proporcionamos a nuestros clientes la
                    solución ideal para sus necesidades con la mejor relación
                    <strong> COSTO - BENEFICIO.</strong>
                  </div>
                  <img
                    className="BeneficiosImg"
                    src={Arcotecho6}
                    alt="Techo sin estructura"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Además de los techos curvos, también  especializamos en la
                    fabricación y venta de estructuras metálicas que
                    proporcionan la base resistente para cualquier edificación.
                    Ya sea para soportar un arcotecho, una nave industrial o
                    cualquier otra estructura, nuestras soluciones metálicas son
                    sinónimo de calidad y durabilidad.
                  </div>
                  <img className="BeneficiosImg" src={RN100} alt="" />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Nuestros trabajos son diseñados y calculados con apego a
                    NTC-DF2004 y al Manual de Diseño por Viento de CFE Vigente.
                  </div>
                  <img
                    className="BeneficiosImg"
                    src={LaminaKR_18}
                    alt=""
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};