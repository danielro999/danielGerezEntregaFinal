import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg='dark' variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="https://picsum.photos/50"
                        alt="logo"
                        className="d-inline-block align-top me-2" />
                    <span>Super Tienda</span>
                </Navbar.Brand>
                <Nav className="ms-auto align-items-center"  >
                    <Nav.Link as={Link} to="/" className="m-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className="m-3">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/joyas" className="m-3">Joyas</Nav.Link>
                    <div className="f-flex align-items-center">
                        <Button variant="outline-light" as={Link} to="/administracion" className="me-2" >
                            Administracion
                        </Button>
                        <Link to="/carrito" className="text-white">Carrito</Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}