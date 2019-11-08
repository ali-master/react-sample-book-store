import React from "react";
import Authors from "../../screens/Authors";
import { Route, Switch } from "react-router-dom";
import cs from "classnames";
import Books from "../../screens/Books/index.js";
// Styles
import styles from "./index.module.scss";

import ReadBooks from "../../../Dashboard/screens/Books/screens/Reads/index";
import UnReadBooks from "../../../Dashboard/screens/Books/screens/UnReads/index";

function Content() {
	return (
		<div className={cs(styles["content"], "container")}>
			<div className="row justify-content-center">
				<Switch>
					<Route path="/dashboard/authors" component={Authors} />
					<Route path="/dashboard/books" component={Books} />
					<Route exact path="/dashboard/reads" component={ReadBooks} />
					<Route exact path="/dashboard/unreads" component={UnReadBooks} />
				</Switch>
			</div>
		</div>
	);
}

export default Content;
