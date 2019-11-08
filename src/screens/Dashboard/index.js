import React from "react";
import { Route, Switch } from "react-router-dom";
import cs from "classnames";

// Local components
import Authors from "./screens/Authors";
import Books from "./screens/Books";
import SideMenu from "./components/SideMenu";
import ReadBooks from "./screens/Books/screens/Reads/index";

// Styles
import styles from "./index.module.scss";

function Dashboard() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-3">
					<SideMenu />
				</div>
				<div className="col-lg-9">
					<div className={cs(styles["content"], "container")}>
						<div className="row justify-content-center">
							<Switch>
								<Route path="/dashboard/authors" component={Authors} />
								<Route path="/dashboard/books" exact component={Books} />
								<Route path="/dashboard/books/read" component={ReadBooks} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
