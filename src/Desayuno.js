/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './App.css';
import {desayuno, comidas} from './menu.json';
console.log(desayuno);

export class Desayunos extends Component {
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
          {/* <div className=" col-md-2 mt-4">
      <button className="btn btn-success btn-lg" >{desayuno.cafeconleche}{desayuno.preciocafeleche}</button>     
        </div> */}

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

export class Comidas extends Component {
  constructor(){
    super();
    this.state = {
    comidas
    }
  }
  
    render() {
     const comida = this.state.comidas.map((comidas, i) =>{
       console.log("DESAYUNO:",comidas);
        return (
        <div className="col-md-2">
      <div className="mt-4">
        <button className="btn btn-danger btn-lg" >{comidas.name}{comidas.precio}</button>
           
          </div>
            {/* <div className=" col-md-2 mt-4">
        <button className="btn btn-success btn-lg" >{desayuno.cafeconleche}{desayuno.preciocafeleche}</button>     
          </div> */}
  
        </div>
        
        )
      })
      return (
        <div className='container'>
          <div className='row mt-1'>
          {comida}
          </div>
  
          
        </div>
      );
    }
  }

// export default Desayunos;
