import handlers from "./balance.bussines";

function balance(state = 0, action) {
	try {
		return handlers[action.type](state, action);
	} catch {
		return state;
	}
}

export default balance;
