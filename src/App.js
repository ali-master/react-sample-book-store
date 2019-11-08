<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './screens/Dashboard/screens/Books'

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
      </header>
      <Books data={"books"} />
    </div>
  );
=======
import React from "react";
import Dashboard from "./screens/Dashboard";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" component={Dashboard} />
			</BrowserRouter>
		</div>
	);
>>>>>>> c60bdcab9e04addea7ece15cc00120f27cf21d58
}

export default App;
