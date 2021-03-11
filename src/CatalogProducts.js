import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  ALPHABET_ASC,
  ALPHABET_DESC,
  PRICE_ASC,
  PRICE_DESC,
} from "./store/constans/productsConstans";

const CatalogProductsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;
const ProductsWrapper = styled.div`
  flex-basis: 33%;
  margin-right: 0.33%;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transform: scale(1);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.h3``;
const CatalogProducts = ({ itemsValues }) => {
  const { selectedProducts } = useSelector((state) => state.categories);
  const { selectedSortOption } = useSelector((state) => state.categories);

  const sortedProducts = (selectedSortOption) => {
    switch (selectedSortOption) {
      case PRICE_ASC:
        return (selectedProducts || itemsValues).sort((a, b) =>
         
        );
      case PRICE_DESC:
        return (selectedProducts || itemsValues).sort((a, b) => );
      case ALPHABET_ASC:
        return (selectedProducts || itemsValues).sort((a, b) =>);

      case ALPHABET_DESC:
        return (selectedProducts || itemsValues).sort((a, b) => 
      default:
        return 
    }
  };

  const products = (selectedProducts || itemsValues).map((product) => (
    <ProductsWrapper>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
      </ImageWrapper>
      <ProductInfo>{product.name}</ProductInfo>
      <span>{product.price}</span>
    </ProductsWrapper>
  ));

  return <CatalogProductsWrapper>{products}</CatalogProductsWrapper>;
};

export default CatalogProducts;
