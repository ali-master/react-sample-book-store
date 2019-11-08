import React from "react";

const Header = props => {
	console.log("dddd", props.columns);
	const hearderColumns = Object.keys(props.columns[0]);
	const base = {
		id: "index",
		name: "Name",
		surename: "Nick Name",
		created_at: "Realese Date",
		updated_at: "Last Modified",
	};
	console.log(hearderColumns);
	return (
		<tr>
			{hearderColumns.map((value, index) => {
				return (
					<th key={index} scope="col">
						{base[value]}
					</th>
				);
			})}
		</tr>
	);
};

export default Header;
