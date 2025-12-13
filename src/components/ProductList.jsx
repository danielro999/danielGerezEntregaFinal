import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/CartContext';


export default function ProductList({ category = null }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products"
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`
        }
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('error fetching data ', error);
                setLoading(false);
            })
    }, [category])

    const handleAgregarCarrito = (product) => {
        alert(`Producto "${product.title}" agregado al carrito`)
    }

    if (loading) {
        return <div>
            loading...
        </div>
    }

    return (
        <Row>
            {products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                    <ProductCard product={product} agregarAlCarrito={handleAgregarCarrito} />
                </Col>
            ))}
        </Row>
    )


}