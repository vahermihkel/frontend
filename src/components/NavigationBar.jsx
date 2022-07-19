import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return ( 
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/">VEEBIPOOD</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
        <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
      </Nav>
      </Container>
    </Navbar> 
   );
}

export default NavigationBar;