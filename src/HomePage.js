import React from "react";

import Categories from "./Categories";
import Slider from "./Slider";

import styled from "styled-components";
import PromoProducts from "./PromoProducts";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const HomePage = () => {
  return (
    <Wrapper>
      <Slider />
      <Categories />
      <PromoProducts />
    </Wrapper>
  );
};
export default HomePage;
