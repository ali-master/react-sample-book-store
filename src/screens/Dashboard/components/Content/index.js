import React from 'react';
import Authors from "../../screens/Authors";
import { BrowserRouter, Route } from "react-router-dom";

function Content() {
  return (
   <div>
	     <Route path="/dashboard/authors" component={Authors} />
   </div>

);
}
export default Content;
