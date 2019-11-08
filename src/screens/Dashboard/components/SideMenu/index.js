import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

function SideMenu() {
	return (
		<nav className="nav flex-column">
			<Link className="nav-link active" to="/dashboard/authors">
				Authors
			</Link>
			<Link className="nav-link active" to="/dashboard/books">
				Books
			</Link>
			<Link className="nav-link active" to="/dashboard/books/read">
				read books
			</Link>
			<Link className="nav-link active" to="/dashboard/books/unreads">
				Unreads Books
			</Link>
		</nav>
	);
}
export default SideMenu;
