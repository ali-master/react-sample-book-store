import React from "react";

const Row = props => {
	return (
		<tr>
			<th scope="row">1</th>
			<td>{props.authorInfo.firstName}</td>
			<td>{props.authorInfo.lastName}</td>
			<td>{props.authorInfo.active ? "Yes" : "NO"}</td>
		</tr>
	);
};

export default Row;
