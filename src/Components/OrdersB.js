import React, { Component } from 'react';
import NewOrder from '../Components/NewOrder'
import Header from '../Components/header.js'
import FinalOrder from '../Components/FinalOrder.js'

class Breakfast extends Component {
    state = {
        orderLists: []
    }
    createNewOrder = data => {
        console.log(data);

        const orderLists = [...this.state.orderLists, data];
        this.setState({
            orderLists
        })
    }

    // Eliminando pedido 
    eliminateOrder = id => {
        const actualOrders = [...this.state.orderLists];
        const orderLists = actualOrders.filter(orderList => orderList.id !== id)
        this.setState({
            orderLists
        })
    }
    render() {
        return (
            <div className='backgroundMenu'>

                <Header titulo='Desayunos' />

                <div>
                    <NewOrder createNewOrder={this.createNewOrder} />
                </div>
                <div>
                    <FinalOrder
                        orderLists={this.state.orderLists}
                        eliminateOrder={this.eliminateOrder}
                    />
                </div>
            </div>

        );
    }
}


export default Breakfast;