import './App.css';
import Otro from "./Otro";
import Formulario from './Formulario';
import Formularioboot from './componentes/Formularioboot';
/* let Mensaje = () => {
  return (
    <h1>Hi everyone</h1>
  )
} */



function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
    </div>
    <div className="col-4">
    </div>
    <div className="col-4">
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>
      <Otro />
      <Formulario />
      <div className="container-fluid p-3 ">
        <Formularioboot />
      </div>
    </div>
    </>
  );
}

export default App;
