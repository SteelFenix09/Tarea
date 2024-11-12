import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './componentes/Inicio/Menu';
import Rutas from './ruter/Rutas';
/* let Mensaje = () => {
  return (
    <h1>Hi everyone</h1>
  )
} */




function App() {
  
  return (
    <>
    
    <Router>
      <div className='container-fluid'>
        <Menu/>
        <Rutas/>
      </div>
    </Router>
    </>
  );
}

export default App;
