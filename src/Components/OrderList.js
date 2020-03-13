import React from 'react'

const OrderList = ({ orderList, eliminateOrder }) => (
    <div>
        <div>
            <h3>Pedido</h3>
            <p><span>Cliente: </span>{orderList.cliente}</p>
            <p><span>Número de mesa: </span>{orderList.mesa}</p>
            <p><span>Cafe americano: </span>{orderList.cafeAmericano}</p>
            <p><span>Café con leche: </span>{orderList.cafeLeche}</p>
            <p><span>Jugo: </span>{orderList.jugo}</p>
            <p><span>Sandwich: </span>{orderList.sandwich}</p>
            <button onClick={() => eliminateOrder(orderList.id)}>Borrar &times;</button>
        </div>
    </div>
);

export default OrderList;