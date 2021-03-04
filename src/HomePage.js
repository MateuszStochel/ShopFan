import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import innerImage from "./assets/Images/BackgroundG.jpg";
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Slider />
    </Wrapper>
  );
};
export default HomePage;
