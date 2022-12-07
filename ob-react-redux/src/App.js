import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/todoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
      </header>
    </div>
  );
}

export default App;
