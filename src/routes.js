import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard';

// Component Definition
const Routes = () => (
  <Router>
    <Switch>
      <Route
        component={Dashboard}
        to="/"
      />
    </Switch>
  </Router>
)

export default Routes;
