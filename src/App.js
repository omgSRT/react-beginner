import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

class App extends Component{
  render() {
    return (
      <div className="App">
        <UserProvider value='omgsrt'>
          <ComponentC />
        </UserProvider>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>Hello World Again</b>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        */}
      </div>
    );
  }
}

export default App;
