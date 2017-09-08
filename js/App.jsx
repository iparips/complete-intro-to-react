// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const FileNotFound = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const show = preload.shows.find(
              s => props.match.params.id === s.imdbID,
            );

            return <Details show={show} {...props} />;
          }}
        />
        <Route component={FileNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
