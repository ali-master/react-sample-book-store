import React from "react";
import FormGroup from "./../../../../components/FormGroup/";
import Button from "./../../../../components/Button/";
import Table from "./../../../../components/Table/Table";
import data from "./../../../../db/db.json";
import Modal from "../../../../components/Modal";

function Authors() {
	const base = {
		id: "index",
		name: "Name",
		surename: "Nick Name",
		created_at: "Realese Date",
		updated_at: "Last Modified",
	};

	return (
		<div>
			<form>
				<FormGroup name="Name" />
				<FormGroup name="surename" />
				<Button />
				<Modal />
			</form>
			<Table data={data.authors} base={base} />
		</div>
	);
}
export default Authors;
