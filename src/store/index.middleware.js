import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	const { createLogger } = require("redux-logger");

	middlewares.push(createLogger({ collapsed: true }));
}

export default middlewares;
