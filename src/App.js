import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CheckIn from "./containers/CheckIn";
import Leaderboard from "./containers/Leaderboard";
import NotFound from './containers/NotFound'
import MainLayoutRoute from "./route/MainLayoutRoute";
import Details from './containers/Details';

function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={Home} />
        <MainLayoutRoute exact path="/check-in" component={CheckIn} />
        <MainLayoutRoute exact path="/leaderboard" component={Leaderboard} />
        <MainLayoutRoute exact path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
