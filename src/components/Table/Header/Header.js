import React from "react";

const Header = props => {
	const hearderColumns = Object.keys(props.columns[0]);
	return (
		<tr>
			{hearderColumns.map((value, index) => {
				return (
					<th key={index} scope="col">
						{props.base[value]}
					</th>
				);
			})}
		</tr>
	);
};

export default Header;
