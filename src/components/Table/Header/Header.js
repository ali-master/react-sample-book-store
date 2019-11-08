import React from "react";

const Header = props => {
	return (
		<tr>
			{props.columns.map(colDesc => {
				return <th scope="col">{colDesc}</th>;
			})}
		</tr>
	);
};

export default Header;
