import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const Routes = ({ }) => {
  return (
    <Router>
      <Switch>
        <Route path={"/page1"} render={() => <Page1 />} />
        <Route  path={"/page2"}  render={() => <Page2 />}  />
        <Redirect exact from="/" to="/Page1" />
      </Switch>
    </Router>
  );
};



export default Routes;
