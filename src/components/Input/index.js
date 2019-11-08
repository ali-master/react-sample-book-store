
import React from 'react';

const Input = (props) => {
	return (
		<input type="text" name={props.name} onChange={props.onChange} className="form-control" />
	)
}

export default Input;
