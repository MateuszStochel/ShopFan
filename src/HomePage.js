import React from "react";
import styled from "styled-components";
import innerImage from "./assets/Images/BackgroundG.jpg";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(250, 250, 250, 0.2)
    ),
    url(${({ img }) => img});
  background-position-x: right;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <InnerWrapper img={innerImage}></InnerWrapper>
      <InnerWrapper img={innerImage}></InnerWrapper>
    </Wrapper>
  );
};

export default HomePage;
