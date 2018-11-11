import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Form, Button, FormControl, FormGroup, NavItem, Nav } from 'react-bootstrap';
import '../styles/Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="parallax_home">
        <Grid>

          <Jumbotron className="jumbo-a">
            <Form inline sSize="lg">
              <FormGroup bsSize="lg">
                <Row className="show-grid text-center">
                  <Col xs={12} md={10}>
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
                  <NavItem eventKey={1} componentClass={Link} href="/profesional" to="/profesional">
                    <i className="far fa-address-card fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>Profesional</h3>
              </Col>

              <Col xs={4} md={2}>
                <Nav >
                  <NavItem eventKey={1} componentClass={Link} href="/servicios" to="/servicios">
                    <i className="fas fa-users fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>Servicios</h3>
              </Col>

              <Col xs={4} md={2}>
                <Nav >
                  <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                    <i className="far fa-building fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>Empresarial</h3>
              </Col>

              <Col xs={4} md={2}>
                <Nav >
                  <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                    <i className="fas fa-church fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>Ministerial</h3>
              </Col>

              <Col xs={4} md={2}>
                <Nav >
                  <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                    <i className="fas fa-globe-americas fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>ONG</h3>
              </Col>

              <Col xs={4} md={2}>
                <Nav >
                  <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                    <i className="fas fa-bullhorn fa-7x"></i>
                  </NavItem>
                </Nav>
                <h3>Eventos</h3>
              </Col>

            </Row>
          </Jumbotron>

        </Grid>
      </div>
    )
  }
}
