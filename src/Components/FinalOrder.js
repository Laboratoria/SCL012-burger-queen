import React from 'react';
import OrderList from './OrderList'
import { Container, Row, Col } from 'react-bootstrap'

const FinalOrder = ({ orderLists, eliminateOrder }) => {
    return (
        <div>
            <div className="tittlePedidos">
                <Container >
                    <Row>
                        <Col><h1>Lista de pedido</h1></Col>
                    </Row>
                </Container>
            </div>
            <div className="FinalOrder">
                {orderLists.map(orderList => (
                    <OrderList
                        key={orderList.id}
                        orderList={orderList}
                        eliminateOrder={eliminateOrder}
                    />
                ))}
            </div>
        </div>
    )
}

export default FinalOrder;