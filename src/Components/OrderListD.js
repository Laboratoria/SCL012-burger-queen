import React from 'react'

const OrderList = ({ orderList, eliminateOrder }) => (
    <div>
        <div>
            <h3>Pedido</h3>
            <p><span>Cliente: </span>{orderList.cliente}</p>
            <p><span>Número de mesa: </span>{orderList.mesa}</p>
            <p><span>Hamburguesa Simple: </span>{orderList.hamburguesaSimple}</p>
            <p><span>Hamburguesa doble: </span>{orderList.hamburguesaDoble}</p>
            <p><span>Papas fritas: </span>{orderList.papasFritas}</p>
            <p><span>Aros de cebolla: </span>{orderList.arosDeCebolla}</p>
            <p><span>Agua 500 ml: </span>{orderList.aguaChica}</p>
            <p><span>Agua 750 ml: </span>{orderList.aguaGrande}</p>
            <p><span>Bebida 500 ml: </span>{orderList.bebidaChica}</p>
            <p><span>Bebida 500 ml: </span>{orderList.bebidaGrande}</p>

            <button onClick={() => eliminateOrder(orderList.id)}>Borrar &times;</button>
        </div>
    </div>
);

export default OrderList;