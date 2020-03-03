import './App.css';
import {Button, Almuerzos} from './button.js';
import {Desayunos , Comidas} from './Desayuno.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <div className="row ml-2"> 
        
          <Link to="/almuerzos" className="text-white "><Almuerzos/></Link>
          <Link to="/pedidos" className="text-white "><Button/></Link>
          </div>
              
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      
      <Switch>
          <Route path="/pedidos">
          <Desayunos/>
          </Route>
        
          <Route path="/almuerzos">
          <Comidas/>
          </Route>
        </Switch>
      </div>
     
    </Router>
  );
}