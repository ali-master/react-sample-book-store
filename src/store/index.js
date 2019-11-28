import { createStore, applyMiddleware, compose } from "redux";
// Reducers
import reducers from "./index.reducer";
// Sagas
import sagas from "./index.sagas";
// Middlewares
import middlewares, { sagaMiddleware } from "./index.middleware";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(reducers, {}, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default appStore;
