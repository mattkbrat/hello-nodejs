import logo from './logo.svg';
import './App.css';
import React from "react";

function formatName(me) {
  return me.firstName + ' ' + me.lastName
}

function Welcome(props){
  return <h1>Hello, {props.name}</h1>

}


const me = {
  firstName: 'Matthew',
  lastName: 'Bratrsovsky',
  social: 'https://www.linkedin.com/in/mattkbrat/'
}

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    <h1>
      Hello, {formatName(me)}
    </h1>
)

const element2 = <Welcome name={formatName(me)}/>


const social = (
    <a
        className="App-link"
        href={me.social}
        target="_blank"
        rel="noopener noreferrer"
    >
      Linked-In
    </a>
)

const loaded = new Date().toLocaleTimeString()

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {element2}
          {social}
        </header>
        <h2>
          <ul>
            <p>It is now {new Date().toLocaleTimeString()}</p>

            <p>Page loaded at {loaded}</p>

          </ul>

        </h2>


      </div>
  );
}

export default App;
