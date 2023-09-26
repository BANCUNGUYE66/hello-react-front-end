import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Greeting} />
    </Switch>
  </Router>
);

export default App;
