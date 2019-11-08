import React from "react";

const Row = props => {
	const columns = Object.keys(props.info);

	return (
		<tr>
			{columns.map((column, index) => {
				return <td key={index}>{props.info[column]}</td>;
			})}
		</tr>
	);
};

export default Row;
