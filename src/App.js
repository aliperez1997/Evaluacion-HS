import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Vehiculos from "./components/Vehiculos";
import './css/general.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Vehiculos}/>
      </Switch>
    </Router>
  );
}

export default App;
