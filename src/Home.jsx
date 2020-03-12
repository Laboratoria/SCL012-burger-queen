import React, { Component } from 'react';
import { KitchenViews } from './kitchen.jsx'
import {BrowserRouter as Link} from "react-router-dom"
// Botones del home
class Home extends Component {
 render() {
    return(
      <div className="Home">
        <button className="btn btn-success btn-lg text-white">
         <hr/>
          <Link to ="/cocina" ><KitchenViews/></Link>
        </button>
        {/* <button  type="button" className="btn btn-success btn-lg text-white"> Cocina</button> */}
       
        
    </div>
    
    );
  }
}
export default Home;