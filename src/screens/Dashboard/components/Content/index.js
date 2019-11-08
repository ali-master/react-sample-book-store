import React from 'react';
import { Route, Switch } from "react-router-dom";
import Books from '../../screens/Books/index.js';

function Content() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/books" component={Books} />
      </Switch>
    </div>
  );
}
export default Content;