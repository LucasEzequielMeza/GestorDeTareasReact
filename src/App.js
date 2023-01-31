import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/containers/TaskListComponent';
import EjemploUno from './hooks/EjemploUno';
import EjemploDos from './hooks/EjemploDos';
import MiComponenteConContexto from './hooks/EjemploTres';
import EjemploCuatro from './hooks/EjemploCuatro';
import GreetingStyles from './components/pure/GreetingStyles';
import Father from './components/containers/Father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greeting.jsx */}
        {/* <GreetingF name={'Lucas'}></GreetingF> */}
        {/*Componente de ejemplo funcional*/}
        {/* <Greeting name={'Lucas'}></Greeting> */}
        {/*Componente de Listado de Tareas */}
        {/*Ejemplo de uso de HOOKS */}
        {/* <EjemploUno/> */}
        {/* <EjemploDos/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <EjemploCuatro nombre='Lucas'>
        {/*Todo lo que hay aca dentro es tratado como props.children*/}
          {/* <h3>Contenido del props.children</h3> */}
        {/* </EjemploCuatro>  */} 
        {/* <GreetingStyles name="Lucas"/> */}
      {/* </header> */}
      {/**Gestion de eventos */}
      {/* <Father/> */}
        <TaskListComponent/>
    </div>
  );
}

export default App;
