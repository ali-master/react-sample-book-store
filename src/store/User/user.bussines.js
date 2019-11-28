import { PREPARE_USER, RESET } from "./user.constants";
import { initialState } from "./user.reducer";

const handlers = {
	[PREPARE_USER]: (state, { payload }) => ({ isLoggedIn: true, user: payload }),
	[RESET]: () => initialState,
};

export default handlers;
