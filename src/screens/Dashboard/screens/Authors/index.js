import React from "react";
import FormGroup from "./../../../../components/FormGroup/";
import Button from "./../../../../components/Button/";
import Table from "./../../../../components/Table/Table";
import data from "./../../../../db/db.json";
import Modal from "../../../../components/Modal";

function Authors() {
	return (
		<div>
			<form>
				<FormGroup name="Name" />
				<FormGroup name="surename" />
				<Button />
				<Modal />
			</form>
			<Table data={data.authors} />
		</div>
	);
}
export default Authors;
