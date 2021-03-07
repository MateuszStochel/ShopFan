import React from "react";

import Categories from "./Categories";
import Slider from "./Slider";

import styled from "styled-components";
import { listenToEventsFromFirestore } from "./firestore/firestoreService";
import useFirestoreCollection from "./hooks/useFirestoreCollection";
import { useDispatch, useSelector } from "react-redux";
import { listenToEvents } from "./store/actions/fetchActions";
import PromoProducts from "./PromoProducts";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  const promoItems = items.filter((item) => item.promo === true);

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <Wrapper>
      <Slider />
      <Categories />
      <PromoProducts products={items} />
    </Wrapper>
  );
};
export default HomePage;
