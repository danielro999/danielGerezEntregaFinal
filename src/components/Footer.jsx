import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function Footer(){
    return(
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0" > Todo por dos pesos</p>
                        <p className="mb.0" > Avenida siempre viva 472</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}