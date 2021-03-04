import React, { useCallback, useEffect, useState } from "react";

import Slide from "./Slide";

import styled, { css } from "styled-components";

import sliderImage from "./assets/Images/background.jpg";
import sliderImage2 from "./assets/Images/BackgroundG.jpg";

const slides = [
  {
    id: 1,
    title: "Find your style",
    subTitle: "Women&Men",
    image: sliderImage,
  },
  {
    id: 2,
    title: "Find your style",
    subTitle: "Women&Men",
    image: sliderImage2,
  },
];

const SliderWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const DotsChangeSlideWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.l4};
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.whiteTransparent};
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.white};
    `};
`;

const TIMEOUT_DURATION = 6000;
const initialState = 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(initialState);

  const slide = useCallback(() => {
    const nextSlide =
      activeIndex === slides.length ? initialState : activeIndex + 1;
    setActiveIndex(nextSlide);
  }, [activeIndex]);

  const handleChangeSlide = (slideIndex) => {
    setActiveIndex(slideIndex);
  };

  useEffect(() => {
    const changeSlide = () => {
      slide();
    };
    const interval = setInterval(changeSlide, TIMEOUT_DURATION);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <SliderWrapper>
      {slides.map(({ id, title, subTitle, image }) => (
        <Slide
          key={id}
          title={title}
          subTitle={subTitle}
          image={image}
          isActive={activeIndex === id}
          onHandleChangeSlide={handleChangeSlide}
        />
      ))}
      <DotsChangeSlideWrapper>
        {slides.map(({ id }) => (
          <Dot
            key={id}
            onClick={() => handleChangeSlide(id)}
            isActive={activeIndex === id}
          />
        ))}
      </DotsChangeSlideWrapper>
    </SliderWrapper>
  );
};

export default Slider;
