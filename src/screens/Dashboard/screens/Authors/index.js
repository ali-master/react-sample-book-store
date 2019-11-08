import React from 'react'
import Input from './../../../../components/Input/'

 function Authors(){
    return(
        <form>
            <Input name="Name"/>
			<Input name="Family"/>
			<Input name="Email"/>
		    <Input name="Password"/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
 }
 export default Authors
