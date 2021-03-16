import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import heartIcon from "./assets/svg/heart.svg";
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
  position: relative;
  flex-basis: 30%;
  margin-right: 3.3%;
  margin-bottom: 15px;
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
const Icon = styled.div`
  z-index: ${({ theme }) => theme.zIndex.l3};
  width: 25px;
  height: 25px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  border: none;
  cursor: pointer;
  filter: invert(0.6);
  &&:hover {
    filter: invert(0);
  }
`;
const ProductInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-size: 20px;
`;

const CatalogProducts = ({ itemsValues }) => {
  const { selectedProducts } = useSelector((state) => state.categories);
  const { selectedSortOption } = useSelector((state) => state.categories);

  const sortedProducts = (selectedProducts || itemsValues).sort((a, b) => {
    switch (selectedSortOption) {
      case ALPHABET_ASC:
        return a.name.localeCompare(b.name);
      case ALPHABET_DESC:
        return b.name.localeCompare(a.name);
      case PRICE_ASC:
        return a.price.localeCompare(b.price);
      case PRICE_DESC:
        return b.price.localeCompare(a.price);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const products = sortedProducts.map((product) => (
    <ProductsWrapper>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
      </ImageWrapper>
      <ProductInfoWrapper>
        <ProductName>{product.name}</ProductName>
        <Icon icon={heartIcon} />
      </ProductInfoWrapper>

      <span>{product.price}$</span>
    </ProductsWrapper>
  ));

  return <CatalogProductsWrapper>{products}</CatalogProductsWrapper>;
};

export default CatalogProducts;
