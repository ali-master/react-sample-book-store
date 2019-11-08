import React from 'react';
import Input from './../Input';

const FormGroup = (props) => {
	return (

		<div className="form-group">
			<label htmlFor="exampleInputPassword1">{props.name}</label>
			<Input  name={props.name} />
		</div>

	)
}

export default FormGroup;
