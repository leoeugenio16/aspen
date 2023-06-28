import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import icono from '../imagenes/LOGO/logooptica.png'


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand >
          <NavLink to="/vision">
            <img class="icono" src={icono} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink class="link-negro" to="/lentesSol"><b>LENTES SOL</b></NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Graduacion"><b>LENTES AUMENTO</b></NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to="/nosotros"><b>ACCESORIOS</b></NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;