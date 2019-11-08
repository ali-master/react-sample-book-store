import React from "react";
import Authors from "../../screens/Authors";
import { Route, Switch } from "react-router-dom";
import cs from "classnames";
import Books from "../../screens/Books/index.js";

// Styles
import styles from "./index.module.scss";

function Content() {
	return (
		<div className={cs(styles["content"], "container")}>
			<div className="row justify-content-center">
				<Switch>
					<Route path="/dashboard/authors" component={Authors} />
					<Route path="/dashboard/books" component={Books} />
				</Switch>
			</div>
		</div>
	);
}
export default Content;
