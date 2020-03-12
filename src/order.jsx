import React, {Component} from 'react';
import "./order.css"


// Componente que contiene la caja donde iran los pedidos 
class Order extends Component {
  state={};
  handleChange = (e)=> {
    this.setState({
        [e.target.name]: e.target.value,

    })
    };
    handleClick = (e)=> {
        
      console.log("button was clicked");
  };
handleSubmit = e=>{
e.preventDefault();
console.log("boton funciona");
console.log(this.state);
};
  render(){
    return(
         
      <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            
          <form  onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label> First Name</label>
          <input onChange={this.handleChange}  className="form-control"  type="text"
          name="firstName"
          value={this.state.firstName}
          />
           <button  
        onClick={this.handleClick}
         className="btn btn-primary">Save</button>
        </div>
        </form>
        );
            <h5 className="card-title text-white">Pedido: </h5>
            <p className="card-text text-white">comida y precio .</p>
            <a href="Kitchen" id="sendToKitchen" className=" btn btn-success"> Enviar a la cocina</a>
          </div>
        </div>
      </div>
    </div>     
    );
  }
}
export default Order;