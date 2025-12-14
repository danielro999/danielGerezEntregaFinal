import { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCart((prev) => prev.filter((producto) => producto.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (cart.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu cart está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
}
