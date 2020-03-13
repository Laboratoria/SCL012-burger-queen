import React from 'react';
import OrderList from './OrderListD.js'

const FinalOrder = ({ orderLists, eliminateOrder }) => {
    return (
        <div>
            <h1>Lista de pedido</h1>

            <div>
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