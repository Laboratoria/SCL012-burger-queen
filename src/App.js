import React from 'react';
import FirstView from './Components/FirstView.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu.js';
import OrdersB from './Components/OrdersB.js';
import OrderD from './Components/OrderD.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FirstView} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/OrdersB' component={OrdersB} />
        <Route exact path='/OrderD' component={OrderD} />
      </Switch>
    </Router>
  )
}
export default App