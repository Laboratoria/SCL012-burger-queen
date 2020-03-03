/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
// import './App.css';
import {desayuno} from './menu.json';
console.log(desayuno);

class Desayunos extends Component {
constructor(){
  super();
  this.state = {
  desayuno
  }
}

  render() {
   const menus = this.state.desayuno.map((desayuno, i) =>{
     console.log("DESAYUNO:",desayuno);
      return (
      <div className="col-md-2">
    <div className="mt-4">
      <button className="btn btn-success btn-lg" >{desayuno.nombre}{desayuno.precio}</button>
         
        </div>
      </div>
      
      )
    })
    return (
      <div className='container'>
        <div className='row mt-1'>
        {menus}
        </div>

        
      </div>
    );
  }
}

export default Desayunos;