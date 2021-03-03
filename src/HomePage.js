import React from "react";
import styled from "styled-components";
import innerImage from "./assets/Images/BackgroundG.jpg";
import Slider from "./Slider";

const Wrapper = styled.div`
  position: relative;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const Innus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  position: relative;
  margin-bottom: 60px;
  margin-top: 60px;
  &::after {
    content: "";
    width: 20%;
    height: 1px;
    background: white;
    position: absolute;
    left: 0;
    top: 50%;
  }
  &::before {
    content: "";
    width: 20%;
    height: 1px;
    background: white;
    position: absolute;
    right: 0;
    top: 50%;
  }
`;
const HomePage = () => {
  return (
    <Wrapper>
      <InnerWrapper img={innerImage} />
    </Wrapper>
  );
};

export default HomePage;
