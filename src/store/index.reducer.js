import { combineReducers } from "redux";
// Reducers
import user from "./User/user.reducer";
import balance from "./Balance/balance.reducer";

export default combineReducers({
	user,
	balance,
});
