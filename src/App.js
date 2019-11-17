import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CheckIn from "./containers/CheckIn";
import Leaderboard from "./containers/Leaderboard";
import NotFound from './containers/NotFound'
import Login from './containers/Login';
import MainLayoutRoute from "./route/MainLayoutRoute";
import Details from './containers/Details';
import Profile from './containers/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <MainLayoutRoute exact path="/" component={Home} />
        <MainLayoutRoute exact path="/check-in" component={CheckIn} />
        <MainLayoutRoute exact path="/leaderboard" component={Leaderboard} />
        <MainLayoutRoute exact path="/details" component={Details} />
        <MainLayoutRoute exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
