import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contact_list';
import ClockF from './components/pure/clockF';
import Clock from './components/pure/Clock';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ContactList></ContactList>
        {/* <ClockF></ClockF> */}

        
        
      </header>
    </div>
  );
}

export default App;
