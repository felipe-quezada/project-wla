import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#e6b300'}}>
      <Container>
        <Navbar.Brand as={Link} to='/'>Construcciones Salas Reyes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/services' >Servicios</Nav.Link>
            <Nav.Link as={Link} to='/about'>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
