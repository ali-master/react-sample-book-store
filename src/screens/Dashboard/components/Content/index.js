import React from "react";
import Authors from "../../screens/Authors";
import { Route } from "react-router-dom";
import cs from "classnames";
// Styles
import styles from "./index.module.scss";

function Content() {
	return (
		<div className={cs(styles["content"], "container")}>
			<div className="row">
				<Route path="/dashboard/authors" component={Authors} />
			</div>
		</div>
	);
}
export default Content;
