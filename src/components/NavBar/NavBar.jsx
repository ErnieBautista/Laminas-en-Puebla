import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav-bar.scss";

import Logo from "../../assets/imgs/Logo Laminas.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <Navbar
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="navBar"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/">Laminas</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/#catalogo">
              <HashLink smooth to="/#catalogo">Catalogo</HashLink>
            </Nav.Link>
            <NavDropdown
              className=" bg_techos_curvos"
              title="Nosotros"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/#Nosotros">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="aviso-de-privacidad">Aviso de Privacidad</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <HashLink smooth to="/#contactanos">
                Contactanos
              </HashLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <Link to="/" className="imagenes">
            <img className="img2" src={Logo} alt="Logo 2 de Arcotechos" />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
