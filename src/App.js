 import './App.css';
 import {Button, Almuerzos} from './button.js';
 import {Desayunos , Comidas} from './Desayuno.js';
 import Navbar from './Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './menu';
import breakfastMenu from './database';


function App (){
  return(
    
    <Router>
      <Navbar/>
      <div>
        <button>
          <Link to ="/">Home</Link>
        </button>
        
          <Link to="/Almuerzos" className="text-white "><Almuerzos/></Link>
          <breakfastMenu/>
        <Link to="/pedidos" className="text-white "><Button/></Link> 
      
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/pedidos">
         <Desayunos/>
         </Route>
        
          <Route path="/almuerzos">
           <Comidas/>
       </Route>
       <Route path="/home">
         </Route>
        
      </div>
      
    </Router>
  )
}
export default App;
      

//           <Link to="/almuerzos" className="text-white "><Almuerzos/></Link>
//           <Link to="/pedidos" className="text-white "><Button/></Link>
//           </div>
              
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
        
      
//       <Switch>
//           <Route path="/pedidos">
//           <Desayunos/>
//           </Route>
        
//           <Route path="/almuerzos">
//           <Comidas/>
//           </Route>
//         </Switch>
//       </div>
     
//     </Router>
//   );
// }