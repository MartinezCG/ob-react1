import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseState from './components/loginUseState';
import LoginUseReducer from './components/loginUseReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Examples</h1>
        {/* <Counter></Counter> */}
        {/* <LoginUseState></LoginUseState> */}
        <LoginUseReducer></LoginUseReducer>
      </header>
    </div>
  );
}

export default App;
