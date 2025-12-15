import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Button, Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
  const isAuth = localStorage.getItem("token") ===
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
  const cerrarSesion = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://picsum.photos/50"
            alt="logo"
            className="d-inline-block align-top me-2"
          />
          <span>Super Tienda</span>
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="m-3">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="m-3">
            Ofertas
          </Nav.Link>
          <Nav.Link as={Link} to="/joyas" className="m-3">
            Joyas
          </Nav.Link>
          <div className="f-flex align-items-center">
            <Link to="/carrito" className="text-white m-3">
              <TiShoppingCart size="2em" />
              {totalItems > 0 && (
                <Badge
                  pill
                  bg="danger"
                  className="top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </Nav>
        <Nav>
          {!isAuth ? (
            <Button
              variant="outline-light"
              as={Link}
              to="/administracion"
              className="me-2"
            >
              Administracion
            </Button>
          ) : (
            <Button variant="outline-light" onClick={cerrarSesion}>
              Cerrar sesion
            </Button>
          )}
          {isAuth && (
            <>
              <Nav.Link as={Link} to="/crudproductos">
                CRUD
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
