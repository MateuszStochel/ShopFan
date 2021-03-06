import React from "react";

import Categories from "./Categories";
import Slider from "./Slider";

import styled from "styled-components";
import { listenToEventsFromFirestore } from "./firestore/firestoreService";
import useFirestoreCollection from "./hooks/useFirestoreCollection";
import { useDispatch, useSelector } from "react-redux";
import { listenToEvents } from "./store/actions/fetchActions";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <Wrapper>
      <Slider />
      <Categories />
    </Wrapper>
  );
};
export default HomePage;
