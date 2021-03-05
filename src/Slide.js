import React from "react";
import styled, { css } from "styled-components";
import SlideTitle from "./SliderText";

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.8s;
  overflow: hidden;
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
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(122, 122, 122, 0.1)
    ),
    url(${({ img }) => img});
  background-size: cover;
  background-position-x: right;
`;
const SlideContentText = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  width: 90%;
  margin-top: 50px;
  opacity: 0;
  transition: 0.8s;
  color: ${({ theme }) => theme.white};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 100%;
    background-color: ${({ theme }) => theme.white};
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 7px;
    height: 100%;
    background-color: ${({ theme }) => theme.white};
  }
  ${({ theme }) => theme.mq.lg} {
    height: 300px;
    width: 60%;
    &:after,
    &:before {
      width: 10px;
    }
  }
  ${({ theme }) => theme.mq.lg} {
    width: 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `};
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 40px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  ${({ theme }) => theme.mq.sm} {
    font-size: 18px;
    top: 60%;
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: 23px;
    padding: 14px 23px;
  }
`;
const Slide = ({ title, subTitle, image, isActive }) => {
  console.log(isActive);
  return (
    <SlideWrapper isActive={isActive}>
      <InnerWrapper img={image} alt="sliderImage">
        <SlideContentText isActive={isActive}>
          <SlideTitle position="top">{title}</SlideTitle>
          <Button>Shop now</Button>
          <SlideTitle position="bottom">{subTitle}</SlideTitle>
        </SlideContentText>
      </InnerWrapper>
    </SlideWrapper>
  );
};

export default Slide;
