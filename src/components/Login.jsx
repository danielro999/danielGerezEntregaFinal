import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Login() {
    const handleSumit = () => {
        e.preventDefault();
        alert('login enviado')
    }
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center" >
                <Col md={6} lg={4} >
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <h2 className="text-center mb-4" >Iniciar sesion</h2>
                            <Form onSubmit={handleSumit}>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="ingrese su nombre" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="ingrese su contraseña" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100"> Ingresar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
    
            </Row>
        </Container>
    )
}
