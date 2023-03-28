import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import icono from '../imagenes/LOGO/LOGONAV.png'


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand >
          <NavLink to="/aspen">
            <img class="icono" src={icono} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink class="link-negro" to="/carta"><b>CARTA</b></NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/promociones"><b>PROMOCIONES</b></NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to="/nosotros"><b>NOSOTROS</b></NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;