import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CatalogPage from "../CatalogPage";
import { listenToEventsFromFirestore } from "../firestore/firestoreService";

import HomePage from "../HomePage";
import useFirestoreCollection from "../hooks/useFirestoreCollection";
import MainTemplate from "../MainTemplate";
import { listenToEvents } from "../store/actions/fetchActions";

const App = () => {
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
      </Switch>
    </MainTemplate>
  );
};

export default App;
