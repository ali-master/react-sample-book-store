import React from "react";

import Row from "./Row/Row";
import Header from "./Header/Header";

const Table = props => {
	return (
		<table class="table table-striped">
			<thead>
				<Header columns={props.data} />
			</thead>
			<tbody>
				{props.data.map((value, indx) => (
					<Row key={indx} authorInfo={value} readOnly />
				))}
			</tbody>
		</table>
	);
};

export default Table;
