import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PokeStore from '../components/PokeStore';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:type" component={PokeStore} />
    </Switch>
  </BrowserRouter>
);

export default Router;
