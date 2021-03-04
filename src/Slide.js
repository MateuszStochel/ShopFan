import React from "react";
import styled, { css } from "styled-components";

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.8s;
  z-index: ${({ theme }) => theme.zIndex.l1};
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      z-index: ${({ theme }) => theme.zIndex.l2};
    `};
`;
const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(2, 15, 32, 0.4)),
    url(${({ img }) => img});
  background-size: cover;
  background-position-x: right;
`;
const SlideContentText = styled.div`
  margin-top: 50px;
  opacity: 0;
  transition: 0.8s;
  position: relative;
  display: flex;
  height: 150px;
  width: 90%;
  color: white;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: white;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background-color: white;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `};
`;
const SlideTitle = styled.h1`
  transform: translateY(-50%);
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  font-size: 20px;
  top: 0;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 20%;
    height: 5px;
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 20%;
    height: 5px;
    background-color: white;
  }
`;
const SlideText = styled.h1`
  transform: translateY(50%);
  text-align: center;
  font-size: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  &:after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 20%;
    height: 0;
    height: 5px;
    background-color: white;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 20%;
    height: 5px;

    background-color: white;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 70%;
  left: 50%;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 40px;
  transform: translate(-50%, -50%);
`;
const Slide = ({ title, subTitle, image, isActive }) => {
  console.log(isActive);
  return (
    <SlideWrapper isActive={isActive}>
      <InnerWrapper img={image} alt="sliderImage">
        <SlideContentText isActive={isActive}>
          <SlideTitle>{title}</SlideTitle>
          <Button>New Style</Button>
          <SlideText>{subTitle}</SlideText>
        </SlideContentText>
      </InnerWrapper>
    </SlideWrapper>
  );
};

export default Slide;
