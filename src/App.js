import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
        <Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>

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
