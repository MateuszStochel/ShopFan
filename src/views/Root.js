import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import MainTemplate from "../MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </MainTemplate>
  );
}

export default App;
