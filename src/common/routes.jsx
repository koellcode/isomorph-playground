import React from "react";
import { Router, Route, IndexRoute } from "inferno-router";

import App from "./App";
import Welcome from "../desktop/pages/welcome/Welcome";
import Info from "../desktop/pages/info/Info";

const routes = (
  <Route component={App}>
    <IndexRoute component={Welcome} />
    <Route path="info" component={Info} />
    <Route path="*" component={<div><h2>ende</h2></div>} />
  </Route>
);

export default routes;
