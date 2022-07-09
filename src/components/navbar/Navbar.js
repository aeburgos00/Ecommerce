import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const NavbarMio = () => {
    return (
        <>
            <Navbar className='navbarBg' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#">VIRTUAL SPORT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Productos</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Hombre</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mujer</NavDropdown.Item>
                                <NavDropdown.Item href="#"> Niños/Niñas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Nav>
                        <CartWidget></CartWidget>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMio;
