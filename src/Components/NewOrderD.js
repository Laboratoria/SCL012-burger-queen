import React, { Component } from 'react';
import '../css/Menu.css';
import uuid from 'uuid/v4'
import Header from './header.js'
import { Button, Container, Row, Col } from 'react-bootstrap'


const stateInicial = {
    orderList: {
        cliente: '',
        mesa: 1,
        hamburguesaSimple: 0,
        hamburguesaDoble: 0,
        papasFritas: 0,
        arosDeCebolla: 0,
        aguaChica: 0,
        aguaGrande: 0,
        bebidaChica: 0,
        bebidaGrande: 0,
    },
    error: false
}

class NewOrder extends Component {
    state = { ...stateInicial }
    handleClick = e => {
        this.setState({
            orderList: {
                ...this.state.orderList,
                [e.target.name]: e.target.value + 1
            }
        })
    }
    handleChange = e => {
        this.setState({
            orderList: {
                ...this.state.orderList,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        // Extrayendo los valores del state y creando un objeto
        const { hamburguesaSimple, hamburguesaDoble, papasFritas, arosDeCebolla, aguaChica, aguaGrande, bebidaChica, bebidaGrande } = this.state.orderList
        const newOrder = { ...this.state.orderList }
        newOrder.id = uuid(); // usando libreria de id
        this.props.createNewOrder(newOrder)
        // Reiniciando formulario
        this.setState({
            ...stateInicial
        })
    }
    render() {
        return (
            <div className='backgroundMenu'>
                <Container>
                    <div className="tittleOrder" >
                        <Header titulo='Almuerzo / Cena' />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Cliente"
                                name="cliente"
                                onChange={this.handleChange}
                                value={this.state.orderList.cliente}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Número Mesa"
                                name="mesa"
                                onChange={this.handleChange}
                                value={this.state.orderList.mesa}
                            />
                        </div>

                        <Col className="TittleHam">
                            <Header titulo='Hamburguesas' />
                            <Button variant="warning" size="lg" block> Hamburguesa Simple $1000 </Button>
                            <Button variant="warning" size="lg" block>Hamburguesa Doble $1500</Button>
                        </Col>

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
                        <input type="submit" value="Agregar nuevo pedido" />
                    </form >
                </Container>
            </div >
        )
    }
}
export default NewOrder;