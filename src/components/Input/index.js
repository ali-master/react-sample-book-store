
import React from 'react';

const Input = () => {
	return (

		   <div className="form-group">
			    <label htmlFor="exampleInputPassword1">{this.props.name}</label>
			    <input type="text" name={this.props.name} className="form-control"/>
		   </div>

	)
}

export default Input;
