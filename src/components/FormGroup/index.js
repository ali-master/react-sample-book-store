import React from 'react';
import Input from './../Input';

const FormGroup = (props) => {
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{props.name}</label>
			<Input name={props.name} onChange={props.onChange} />
		</div>

	)
}

export default FormGroup;
