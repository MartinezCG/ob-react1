import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/fetchExample';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}

          {/* Componente propio Greetings.jsx */}
          {/* <Greeting name= "Carlos"></Greeting> */}

          {/* Componente de ejemplo funcional */}
          {/* <GreetingF name="Carlos"></GreetingF> */}

          {/* Componente de listado de tareas */}
          {/* <TaskListComponent></TaskListComponent> */}

          {/* Ejemplo de uso de HOOKS */}
          {/* <Ejemplo1></Ejemplo1> */}
          {/* <Ejemplo2></Ejemplo2> */}

          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 nombre= 'Carlos'>
            Todo lo que hay aqui es tratado como props.children
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4>
          */}

          {/* <GreetingStyled name= 'Carlos'></GreetingStyled> */}
      {/* </header> */}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asincronos */}
      {/* <AsyncExample/> */}
      {/* <ObservableExample/> */}
      <FetchExample></FetchExample>

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
