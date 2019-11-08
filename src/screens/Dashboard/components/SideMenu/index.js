import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function SideMenu() {
	return (
		<nav class="nav flex-column">
			<BrowserRouter>
				<Link class="nav-link active" to="/dashboard/authors">
					Authors
				</Link>
				<Link class="nav-link active" to="/dashboard/books">
					Books
				</Link>
				<Link class="nav-link active" to="/dashboard/reads">
					read books
				</Link>
				<Link class="nav-link active" to="/dashboard/unreads">
					unread books
				</Link>
			</BrowserRouter>
		</nav>
	);
}
export default SideMenu;
