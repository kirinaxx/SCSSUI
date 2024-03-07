import logo from './logo.svg';
import './App.css';

const a = [5, 4, 3, 2, 1]
const b = "hello"
let c = "string"
c = 0

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{c}</h1>
      </header>
    </div>
  );
}

export default App;
