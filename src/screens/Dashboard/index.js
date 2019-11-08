import React from "react";

import SideMenu from "./components/SideMenu";
import Content from "./components/Content";

function Dashboard() {
	return (
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<SideMenu />
				</div>
				<div class="col-lg-9">
					<Content />
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
