import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

const sortedProducts = (selectedSortOption) => {
  switch (selectedSortOption) {
    case: 'SORT_BY_PRICE_ASCENDING'
    	return (selectedProducts || itemsValues).sort
    case: 'SORT_BY_PRICE_DESCENDING'
        	return zwróc posortowane produkty by descendning;
    case: 'SORT_BY_NAME_ASCENDING'  
    		return zwroc posortowane produkty by name ascending

  }
}

const ProductInfo = styled.h3``;
const CatalogProducts = ({ itemsValues }) => {
  const { selectedProducts } = useSelector((state) => state.categories);
  const { selectedSortOption } = useSelector((state) => state.categories);
  
  
  

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
