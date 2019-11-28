import handlers from "./user.bussines";

export const initialState = {
	user: {},
	isLoggedIn: false,
};

function reducer(state = initialState, action) {
	try {
		return handlers[action.type](state, action);
	} catch {
		return state;
	}
}

export default reducer;
