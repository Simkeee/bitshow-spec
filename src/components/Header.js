import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles.css"

function Header() {
  return (
    <Navbar className='nav-cont'>
      <Container>
        <Navbar.Brand className='logo' href="/"><b>Bit Shows</b></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Nav.Link className='about' href="/about">About us</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;