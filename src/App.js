import React from "react";
import Pub from "./units/publications.json";
import Reader from "./components/Reader/Reader";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <>
    <HashRouter>
      <Switch>
        <Route
          path="/reader"
          exact
          render={routerProps => <Reader {...routerProps} items={Pub} />}
        />
        <Redirect to="/reader" />
      </Switch>
    </HashRouter>
  </>
);

export default App;
