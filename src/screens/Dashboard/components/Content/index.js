import React from "react";
import Authors from "../../screens/Authors";
import { Route } from "react-router-dom";
// Styles
import styles from "./index.module.scss";

function Content() {
	return (
		<div className={styles["content"]}>
			<Route path="/dashboard/authors" component={Authors} />
		</div>
	);
}
export default Content;
