import React from "react";
import { render } from "react-dom";
import { Router } from "inferno-router";
import { createBrowserHistory } from "history";

import routes from "../common/routes";

const history = createBrowserHistory();

const app = document.getElementById("inferno");

if (app) {
  render(
    <Router history={history}>
      {routes}
    </Router>,
    app
  );
}
