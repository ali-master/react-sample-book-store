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
}

export default App;
