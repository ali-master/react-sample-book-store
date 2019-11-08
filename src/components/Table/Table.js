import React from "react";

import Row from "./Row/Row";
import Header from "./Header/Header";

const Table = props => {
	return (
		<table className="table table-striped">
			<thead>
				<Header columns={props.data} base={props.base} />
			</thead>
			<tbody>
				{props.data.map((value, indx) => (
					<Row key={indx} info={value} />
				))}
			</tbody>
		</table>
	);
};

export default Table;
