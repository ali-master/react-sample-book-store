import React from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./index.module.scss";

function SideMenu() {
	return (
		<div className={styles["side-menu"]}>
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
		</div>
	);
}
export default SideMenu;
