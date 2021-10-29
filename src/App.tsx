import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@linaria/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
      </header>
    </div>
  );
}

const Footer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f5f5;
`

export default App;
