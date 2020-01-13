import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/';
import News from './pages/News';
import Article from './pages/Article/';
import DetailArticle from './pages/Article/Detail';

export default function index() {
  const [topic, setTopic] = useState('');

  const setFromHome = (data) => {
    setTopic(data);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home setTopic={setFromHome} />
        </Route>
        <Route path="/news" >
          <News />
        </Route>
        <Route path="/article" >
          <Article topic={topic} />
        </Route>
        <Route path="/read-article" >
          <DetailArticle topic={topic} />
        </Route>
      </Switch>
    </Router>
  );
}
