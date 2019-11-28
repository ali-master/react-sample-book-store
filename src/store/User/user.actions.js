import { LOGOUT, LOGIN } from "./user.constants";

export const doLogin = user => ({
	type: LOGIN,
	payload: user,
});

export const doLogout = () => ({
	type: LOGOUT,
});
