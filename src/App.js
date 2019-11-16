import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CheckIn from "./containers/CheckIn";
import Leaderboard from "./containers/Leaderboard";
import NotFound from './containers/NotFound'
import MainLayoutRoute from "./route/MainLayoutRoute";

function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={Home} />
        <MainLayoutRoute exact path="/check-in" component={CheckIn} />
        <MainLayoutRoute exact path="/leaderboard" component={Leaderboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
