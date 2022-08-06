import { Avatar } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import NetflixLogo from '../../atoms/NetflixLogo/Index';

function BasicExample() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate(path);
    }
  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark" className="header">
    <Container>
      <Navbar.Brand><NetflixLogo/></Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/catalogo" style={{color: '#FFFFFF8C', textDecoration: 'none'}}>Catalog</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;