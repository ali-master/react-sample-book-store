import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
	return (
		<nav class="nav flex-column">
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
		</nav>
	);
}
export default SideMenu;
