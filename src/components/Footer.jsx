import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-1 mt-1 fixed-bottom"  >
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0" > Todo por dos pesos</p>
                        <p className="mb.0" > Avenida siempre viva 472</p>
                    </Col>
                    <Col md={6}>

                        <div>
                            <a href="#" className='text-white m-3' >facebok</a>
                            <a href="#" className='text-white m-3' >twiter</a>
                            <a href="#" className='text-white m-3' >instagram</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}