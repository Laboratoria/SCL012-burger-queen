import React, { Component } from 'react';
import Header from './header.js'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '../css/Menu.css';

class Dinner extends Component {
  render() {
    return (
      <div className='backgroundMenu'>
        <Container>
          <Row>
            <div className="tittleOrder" >
              <Header titulo='Almuerzo / Cena' />
            </div>
            <Col className="TittleHam">
              <Header titulo='Hamburguesas' />
              <Button variant="warning" size="lg" block> Hamburguesa Simple $1000 </Button>
              <Button variant="warning" size="lg" block>Hamburguesa Doble $1500</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Header titulo='Acompañamientos' />
              <Button variant="warning" size="lg" block>Papas fritas $500</Button>
              <Button variant="warning" size="lg" block>Aros de cebolla $500</Button>
            </Col>
            <Col>
              <Header titulo='Para Tomar' />
              <Button variant="warning" size="lg" block>Agua 500ml $500</Button>
              <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
              <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
            </Col>
            <Col>
              <Button variant="warning" size="lg" block>Bebida/gaseosa 500ml $700</Button>
              <Button variant="warning" size="lg" block>Bebida/gaseosa 750ml $1000</Button>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
export default Dinner;

