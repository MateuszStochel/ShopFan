import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Slider from "./Slider";

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
    </Wrapper>
  );
};
export default HomePage;
