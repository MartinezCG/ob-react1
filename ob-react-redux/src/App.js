import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/todoContainer';
import TodoFormContainer from './components/containers/todoFormContainer';
import FilterOptions from './components/pure/filterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* Filter Option contain Filter Container */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
