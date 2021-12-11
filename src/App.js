
import './App.css';
import NavBar from './componentes/paginas/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes ,Route } from 'react-router-dom';
// O routes é o meus Switch

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/'/>
      </Routes>
       
      
    </Router>
  );
}

export default App;
