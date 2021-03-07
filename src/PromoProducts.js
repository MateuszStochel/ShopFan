import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

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
  return <PromoProductsWrapper></PromoProductsWrapper>;
};

export default PromoProducts;
