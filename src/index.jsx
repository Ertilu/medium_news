import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/';
import News from './pages/News';
import Article from './pages/Article/';

const index = () => (
  <Router>
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/news" >
        <News />
      </Route>
      <Route path="/article" >
        <Article />
      </Route>
    </Switch>
  </Router>
);

export default index;
