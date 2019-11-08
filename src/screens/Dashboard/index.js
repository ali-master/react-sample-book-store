import React from "react";

import SideMenu from "./components/SideMenu";
import Content from "./components/Content";

function Dashboard() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-3">
					<SideMenu />
				</div>
				<div className="col-lg-9">
					<Content />
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
