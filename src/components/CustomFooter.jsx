import React, { Component } from 'react';
import { Navbar, Label } from 'react-bootstrap';
import './CustomFooter.scss';

export default class CustomLeftter extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect className="Footer">

        <h1><Label className="Publicidad_Footer">Publicidad</Label></h1>

      </Navbar>
    )
  }
}
