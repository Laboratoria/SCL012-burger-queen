import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"; // Importamos los componentes de la libreria con los que haremos el router
import {BreakfastMenu, LunchMenu} from './data-fire.jsx';  // Componentes que nos mostraran la data de firebase 
import {BreakfastButton,LunchButton, KitchenButton} from './button.jsx'; //  Botones que muestran datos de firebase
import Navbar from './Navbar.jsx';
import Order from './order.jsx';
// import Home from './Home.jsx'
import {KitchenViews} from './kitchen.jsx'

export default function App() {
  
  return (
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <div className="row ml-4">
          <hr></hr>
          {/* Creamos la ruta y le pasamos el componente del boton que nos mostrará cada Menú  */}
        <Link to="/desayunos" className="text-white "><BreakfastButton/></Link>

        <Link to="/almuerzos" className="text-white "><LunchButton/></Link>
        <Link to ="/cocina" className="text-white"><KitchenButton/></Link>
          

        <Link to="/almuerzos" className="text-white "><LunchButton/></Link> 

          </div>
          
          {/* Le decimos el componente que tiene que mostrar por cada ruta */}
          <Route exact path ="/">

          </Route>
          <Route path="/almuerzos">
          <LunchMenu/>
          <hr></hr>
          <hr></hr>
          <Order/>
          </Route>

          <Route path="/desayunos">
          <BreakfastMenu/>
          <hr></hr>
          <hr></hr>
          <Order/>
          </Route>

          <Route path= "/cocina">
            <KitchenViews/>
          </Route>

      </div>
      
    </Router>
  )
}