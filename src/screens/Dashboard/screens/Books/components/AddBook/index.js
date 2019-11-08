import React, { useState } from "react";

import Button from "../../../../../../components/Button/";
import FormGroup from "../../../../../../components/FormGroup";

function AddBook() {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();

		console.log({ title, description });
	};

	return (
		<form className="mb-5" onSubmit={handleSubmit}>
			<FormGroup name="title" onChange={e => setTitle(e.target.value)} />
			<FormGroup name="description" onChange={e => setDescription(e.target.value)} />

			<Button />
		</form>
	);
}
export default AddBook;
