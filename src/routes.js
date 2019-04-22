import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Game from './pages/Game';
import Home from './pages/Home';
import Team from './pages/Team';
import Teams from './pages/Teams';
import BaseLayout from './components/layout/BaseLayout';

// Component Definition
const Routes = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route
          component={Home}
          exact
          path="/"
        />
        <Route
          component={Teams}
          path="/teams"
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
