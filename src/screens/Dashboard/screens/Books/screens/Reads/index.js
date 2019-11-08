import React from "react";

import Table from "../../../../../../components/Table/Table";
import data from "../../../../../../db/db.json";

const ReadBooks = props => {
	const base = {
		id: "id",
		title: "title",
		description: "description",
		created_at: "created_at",
		updated_at: "updated_at",
		published_at: "published_at",
		publisher: "publisher",
		stars: "stars",
		isRead: "isRead",
		ISBN10: "ISBN10",
	};

	return <Table data={data.books} base={base} />;
};

export default ReadBooks;
