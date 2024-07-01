import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/games" component={GamesPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </Router>
);

export default Routes;
