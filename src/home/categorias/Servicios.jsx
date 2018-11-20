import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Form, Button, FormControl, FormGroup, NavItem, Nav } from 'react-bootstrap';
import '../../styles/Home.scss';

export default class Servicios extends Component {
    render() {
        return (
            <div className="parallax_home">
                <Grid>
                    <Jumbotron className="jumbo-a">
                        <Form inline sSize="lg">
                            <FormGroup bsSize="lg">
                                <Row className="show-grid text-center">

                                    <Col xs={1} md={2} className="referenciaVolver">
                                        <Nav >
                                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                                <i className="fas fa-home fa-3x"></i>
                                            </NavItem>
                                        </Nav>
                                        <Nav >
                                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                                <i className="fas fa-arrow-left fa-3x"></i>
                                            </NavItem>
                                        </Nav>

                                    </Col>

                                    <Col xs={11} md={10}>
                                        <Row>
                                            <Col xs={9} sm={11}>
                                                <FormControl type="text" placeholder="¿Qué buscás?" />
                                            </Col>
                                            <Col xs={1} sm={1}>
                                                <Button type="submit" className="btnBuscar" bsSize="lg"><i className="fas fa-search"></i></Button>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                            </FormGroup>
                        </Form>
                    </Jumbotron>

                    <Jumbotron className="jumbo-b">
                        <Row className="show-grid text-center">

                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fab fa-accessible-icon fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>A. Terapéutica</h3>
                            </Col>

                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-broom fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>Limpieza</h3>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-utensils fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>Catering</h3>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-cut fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>Peluquería</h3>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fas fa-toolbox fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>Construcción</h3>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fas fa-wrench fa-7x"></i>
                                    </NavItem>
                                </Nav>
                                <h3>Mantenimiento</h3>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}
