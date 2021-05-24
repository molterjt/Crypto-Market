import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {App} from './App';
import {MyChart} from './components/Cryptos/Chart/lineChart';
import './App.scss';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="base" >
        <Switch>
          <Route strict exact path="/charts" component={MyChart} />
          <Route exact path="/" component={App} />
          <Route path="*" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}