import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

class App extends Component{
  render() {
    return (
      <div className="App">
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
      </header> */}
      {/* <Greet name='Bruce Wayne' role='user'>
        <p>This Is Child Property</p>
      </Greet>
      <Greet name='James' role='user'>
        <button>Action</button>
      </Greet>
      <Greet name='Diona' role='admin'/>
      <Welcome name='Bruce Wayne' role='user'/>
      <Welcome name='James' role='user'/>
      <Welcome name='Diona' role='admin'/>
      <Hello /> */}

        <Message />
      </div>
    );
  }
}

export default App;
