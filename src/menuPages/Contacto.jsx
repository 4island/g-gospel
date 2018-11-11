import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import '../styles/menuPages.scss';

export default class Contacto extends Component {
  render() {
    return (
      <div className="parallax_about">
        <Grid>
          <Jumbotron className="jumbotron_about">
            <h2 style={{ color: "rgb(104, 104, 104)" }}>Quienes Somos</h2><br/>
            <p>
              Mi nombre es Rolando Aranda, y soy el creador de Guía Gospel.
              Resido en la Ciudad Autónoma de Buenos Aires junto a mi esposa Liliana.
              Ambos somos Pastores, pertenecientes al Ministerio Internacional del Evangelio Cuadrangular en Argentina.
              Somos fundadores de una obra en la ciudad de Ceres, Santa Fé, y su anexo en la localidad de Selva, Sgo del Estero.
            </p>
            <p>
              Actualmente nuestra Misión, es colaborar con la extensión del Reino de nuestro Señor Jesucristo, en la Ciudad de Buenos Aires.
              También nuestra Misión es llevar adelante el proyecto Guía Gospel a cada rincón de Argentina.<br/>              Deseando que cada hno/a de la Fé sea bendición a su prójimo.
              SUMATE..!!<br/><br/>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guía Gospel<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"<br/><br/>
            </p>
            </p>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
