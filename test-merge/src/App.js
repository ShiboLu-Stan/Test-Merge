import logo from './logo.svg';
import './App.css';
import React from "@types/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="col">
        <h5>About</h5>
        <ul>
          <li>
            <Link to="/">Learn about</Link>
          </li>
          <li>
            <Link to="/">Agents</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Get the inside story</Link>
          </li>
          <li>
            <Link to="/">Press</Link>
          </li>
          <li>
            <Link to="/">Communities</Link>
          </li>
          <li>
            <Link to="/">Store</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
