/**
 * @module Sagas/User
 * @desc User
 */
import { all, delay, put, takeLatest } from "redux-saga/effects";
// actions
import * as Types from "./user.constants";

/**
 * Login
 */
export function* login(action) {
	yield delay(1000);

	yield window.localStorage.setItem("isLoggedIn", true);

	yield delay(1000);

	yield put({
		type: Types.PREPARE_USER,
		payload: action.payload,
	});
}

/**
 * Logout
 */
export function* logout() {
	yield delay(200);

	yield window.localStorage.removeItem("isLoggedIn");

	yield put({
		type: Types.RESET,
	});
}

/**
 * User Sagas
 */
export default function* root() {
	yield all([takeLatest(Types.LOGIN, login), takeLatest(Types.LOGOUT, logout)]);
}
