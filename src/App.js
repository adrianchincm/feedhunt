import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import ComposeHeader from './components/ComposeHeader';
import Home from './containers/Home';

function App() {
  return (
    <div className="text-center">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-black text-5xl">
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
      </header> */}
      <Home />
    </div>
  );
}

export default App;
