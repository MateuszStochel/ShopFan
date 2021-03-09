import React from "react";
import { Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  listenToCategories,
  listenToEvents,
} from "../store/actions/fetchActions";

import {
  listenToCategoriesFromFirestore,
  listenToEventsFromFirestore,
} from "../firestore/firestoreService";
import useFirestoreCollection from "../hooks/useFirestoreCollection";

import CatalogPage from "../CatalogPage";
import HomePage from "../HomePage";
import MainTemplate from "../MainTemplate";

const App = () => {
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (categories) => dispatch(listenToCategories(categories)),
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
