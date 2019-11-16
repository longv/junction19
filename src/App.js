import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CheckIn from "./containers/CheckIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CheckIn} />
      </Switch>
    </Router>
  );
}

export default App;
