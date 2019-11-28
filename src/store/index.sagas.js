import { all, fork } from "redux-saga/effects";
// Sagas entities
import UserSagas from "./User/user.sagas";

/**
 * rootSaga
 */
export default function* root() {
	yield all([fork(UserSagas)]);
}
