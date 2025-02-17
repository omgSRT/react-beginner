import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './css/appStyle.css'
import style from  './css/appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

class App extends Component{
  render() {
    return (
      <div className="App">
        <LifeCycleA />


        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <StyleSheet primary={false} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind/> */}
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
        <Greet name='Bruce Wayne' role='user'>
          <p>This Is Child Property</p>
        </Greet>
        <Greet name='James' role='user'>
          <button>Action</button>
        </Greet>
        <Greet name='Diona' role='admin'/>
        <Welcome name='Bruce Wayne' role='user'/>
        <Welcome name='James' role='user'/>
        <Welcome name='Diona' role='admin'/>
        <Hello />
        <Message />
        <FunctionClick />
        <ClassClick /> */}
      </div>
    );
  }
}

export default App;
