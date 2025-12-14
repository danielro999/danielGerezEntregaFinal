import { useState, useEffect } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";

const API_URL = "https://693473cd4090fe3bf01ff493.mockapi.io/Products/";

export default function CrudProductos() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("error al obtener productos", error));
  }

  function handleCloseModal(product) {
    setShow(false);
    setForm({ title: "", description: "", price: "", stock: "", image: "" });
    setEditId(null);
  }

  function handleShowModal(product) {
    setShow(true);
    if (product) {
      setForm({
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
      });
      setEditId(product.id);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al guardar el producto");
        return res.json();
      })
      .then(() => {
        handleCloseModal();
        getProducts();
      })
      .catch((error) => console.error("Error:", error));
  }

  function deleteProduct(id) {
    if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar el producto");
        getProductos();
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div className="container mt-4">
      <h2>CRUD de Productos</h2>
      <Button className="mb-3" onClick={() => handleShowModal()}>
        Agregar Producto
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith("http") ? (
                  <img
                    src={prod.image}
                    alt={prod.title}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleShowModal(prod)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteProduct(prod.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de agregar / editar */}
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
