<<<<<<< HEAD
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
=======
import React from "react";
import Authors from "../../screens/Authors";
import { Route } from "react-router-dom";
import cs from "classnames";
// Styles
import styles from "./index.module.scss";

function Content() {
	return (
		<div className={cs(styles["content"], "container")}>
			<div className="row justify-content-center">
				<Route path="/dashboard/authors" component={Authors} />
			</div>
		</div>
	);
>>>>>>> b9a781262f39856b0b56c527d2ea5e08dbe0ac8f
}
export default Content;
