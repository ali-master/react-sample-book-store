import React from "react";
import FormGroup from "./../../../../components/FormGroup/";
import Button from "./../../../../components/Button/";
import Table from "./../../../../components/Table/Table";
import data from "./../../../../db/db.json";

function Authors() {
	return (
		<div>
			<form>
				<FormGroup name="Name" />
				<FormGroup name="surename" />
				<Button />
			</form>
			<Table data={data.authors} />
		</div>
	);
}
export default Authors;
