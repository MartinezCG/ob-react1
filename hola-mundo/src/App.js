import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          {/* Componente propio Greetings.jsx */}
          {/* <Greeting name= "Carlos"></Greeting> */}

          {/* Componente de ejemplo funcional */}
          {/* <GreetingF name="Carlos"></GreetingF> */}

          {/* Componente de listado de tareas */}
          {/* <TaskListComponent></TaskListComponent> */}

          <ContactList></ContactList>

      </header>
    </div>
  );
}

export default App;
