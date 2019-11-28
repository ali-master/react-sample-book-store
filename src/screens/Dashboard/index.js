import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button";
import { doLogin, doLogout } from "../../store/User/user.actions";
import ImNotARobot from "./components/Robot";

function Dashboard(props) {
	const userState = useSelector(({ user }) => user);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<h1>I'm not a robot</h1>
			<ImNotARobot />
			<div>
				<h1>User</h1>

				<Button onClick={() => dispatch(doLogin({ name: "John", surename: "Doe", age: 30 }))}>Login</Button>
				{userState.isLoggedIn && <Button onClick={() => dispatch(doLogout())}>Logout</Button>}
			</div>
		</div>
	);
}

export default Dashboard;
