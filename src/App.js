import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth} from "./ruteo/AuthContext";
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';

import 'bootswatch/dist/sketchy/bootstrap.min.css';


const App = () => {
  const { user } = useAuth();
  return (
    <div style={{ background:"#5D6D7E"}}>
      
      <h1>App.js</h1>
      <h2>Acsara Huayta Alex Junior</h2>
      <Router>
      { user ? <BarraRutasProtected /> : <BarraRutasPublic />}
      </Router>
    </div>
  )
}

export default App
