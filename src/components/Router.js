import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './common/notFound/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
