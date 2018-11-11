import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Form, Button, FormControl, FormGroup, NavItem, Nav } from 'react-bootstrap';
import '../styles/Home.scss';

export default class Resultados extends Component {
    render() {
        return (
            <div className="parallax_home">
                <Grid>

                    <Jumbotron className="jumbo-a">
                        <Form inline sSize="lg">
                            <FormGroup bsSize="lg">
                                <Row className="show-grid text-center">
                                    <Col xs={10} md={10}>
                                        <FormControl type="text" placeholder="¿Qué buscás?" />
                                        <Button type="submit" className="btnBuscar" bsSize="lg"><i className="fas fa-search"></i></Button>
                                    </Col>
                                    <Col xs={2} md={2} className="referenciaHome">
                                        <Nav >
                                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                                <i className="fas fa-home fa-3x"></i><h6>Inicio</h6>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Jumbotron>

                    <Jumbotron className="jumbo-b">
                        <Row className="show-grid text-left">

                            <Col xs={6} md={2}>
                                <p>jdfhsdkjfhsdkjfhsdkljhkdfjghsdfklj</p>
                            </Col>

                            <Col xs={6} md={2}>
                                <p>jdfhsdkjfhsdkjfhsdkljhkdfjghsdfklj</p>
                            </Col>

                            <Col xs={6} md={2}>
                                <p>jdfhsdkjfhsdkjfhsdkljhkdfjghsdfklj</p>
                            </Col>

                            <Col xs={6} md={2}>
                                <p>jdfhsdkjfhsdkjfhsdkljhkdfjghsdfklj</p>
                            </Col>

                        </Row>
                    </Jumbotron>

                </Grid>
            </div>
        )
    }
}
