import * as React from "react";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

const initialState = {
	users: [],
	books: [],
	authors: [],
};
function reducer(state, action) {
	return { ...state, ...action };
}

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<div className="App">
			<StateContext.Provider value={state}>
				<DispatchContext.Provider value={dispatch}>
					<BrowserRouter>
						<Route path="/dashboard" component={Dashboard} />
					</BrowserRouter>
				</DispatchContext.Provider>
			</StateContext.Provider>
		</div>
	);
}

export const useGlobalState = () => React.useContext(StateContext);
export const useGlobalDispatch = () => React.useContext(DispatchContext);
export default App;
