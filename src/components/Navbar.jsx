import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/hammer.svg';


export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#e6b300'}}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top me-3" />
          Construcciones Salas Reyes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='underline' className="ms-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/services' >Servicios</Nav.Link>
            <Nav.Link as={Link} to='/about'>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
