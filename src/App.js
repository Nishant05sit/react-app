import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://duckduckgo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Duck Duck Go
        </a>
      </header>
    </div>
  );
}

export default App;
