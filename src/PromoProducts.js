import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  xxxl: {
    breakpoint: { max: 5000, min: 1600 },
    partialVisibilityGutter: 80,
    items: 4,
  },
  xxl: {
    breakpoint: { max: 1600, min: 1400 },
    partialVisibilityGutter: 10,
    items: 4,
  },
  xl: {
    breakpoint: { max: 1400, min: 1024 },
    partialVisibilityGutter: 40,
    items: 3,
  },
  lg: {
    breakpoint: { max: 1024, min: 800 },
    partialVisibilityGutter: 100,
    items: 2,
  },
  m: {
    breakpoint: { max: 800, min: 600 },
    partialVisibilityGutter: 10,
    items: 2,
  },
  s: {
    breakpoint: { max: 600, min: 480 },
    partialVisibilityGutter: 100,
    items: 1,
  },
  xs: {
    breakpoint: { max: 400, min: 0 },
    partialVisibilityGutter: 40,
    items: 1,
  },
};

const Wrappers = styled.div``;
const Image = styled.img`
  width: 2000px;
`;
const PromoProductsWrapper = styled.div``;

const PromoProducts = ({ products }) => {
  const carouselSlides = products.map(({ name, price, image }) => (
    <Wrappers>
      <Image src={image} />
    </Wrappers>
  ));
  return (
    <PromoProductsWrapper>
      <Carousel partialVisbile responsive={responsive}>
        {carouselSlides}
      </Carousel>
    </PromoProductsWrapper>
  );
};

export default PromoProducts;
