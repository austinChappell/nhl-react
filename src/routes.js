import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';

// Component Definition
const Routes = () => (
  <Router>
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
    </Switch>
  </Router>
)

export default Routes;
