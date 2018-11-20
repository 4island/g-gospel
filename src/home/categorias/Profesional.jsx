import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Form, Button, FormControl, FormGroup, NavItem, Nav } from 'react-bootstrap';
import '../../styles/Home.scss';

export default class Profesional extends Component {
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
                                        <i className="fas fa-laptop fa-7x">
                                            <h3>Programadores</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>

                            <Col xs={4} md={2}>
                                <Nav >
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-user-tie fa-7x">
                                            <h3>Abogados</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav>
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-user-md fa-7x">
                                            <h3>Médicos</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>

                            <Col xs={4} md={2}>
                                <Nav>
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-chalkboard-teacher fa-7x">
                                            <h3>Profesores</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav>
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fa-shapes fa-7x">
                                            <h3>Psicólogos</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col xs={4} md={2}>
                                <Nav>
                                    <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                        <i className="fas fas fa-wrench fa-7x">
                                            <h3>Mantenimiento</h3></i>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}
