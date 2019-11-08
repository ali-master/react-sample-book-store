import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
	return (
		<nav className="nav flex-column">
			<Link className="nav-link active" to="/dashboard/authors">
				Authors
			</Link>
			<Link className="nav-link active" to="/dashboard/books">
				Books
			</Link>
			<Link className="nav-link active" to="/dashboard/reads">
				read books
			</Link>
			<Link className="nav-link active" to="/dashboard/unreads">
				unread books
			</Link>
		</nav>
	);
}
export default SideMenu;
