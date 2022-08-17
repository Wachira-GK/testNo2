import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My current projects</h1>
        
        <a id="lk" href="https://gkapps-calc.netlify.app/">Calculator</a>
        <a href="#">Comming Soon...</a>
      </header>
    </div>
  );
}

export default App;
