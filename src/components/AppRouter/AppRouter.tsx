import React, { FC } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RoutesLiterals from "components/AppRouter/RoutesLiterals";
import HealthStatus from "views/HealthStatus/HealthStatus";

export const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path={RoutesLiterals.healthStatus.route}>
        <HealthStatus />
      </Route>

      <Redirect to={RoutesLiterals.healthStatus.route} />
    </Switch>
  </Router>
);
