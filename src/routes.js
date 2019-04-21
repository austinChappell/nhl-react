import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Team from './pages/Team';
import BaseLayout from './components/layout/BaseLayout';

// Component Definition
const Routes = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route
          component={Dashboard}
          exact
          path="/"
        />
        <Route
          component={Team}
          path="/teams/:id"
        />
        <Route
          component={Game}
          path="/games/:id"
        />
      </Switch>
    </BaseLayout>
  </Router>
);

export default Routes;
