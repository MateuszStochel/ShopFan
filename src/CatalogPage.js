import React, { useState } from "react";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import {
  filterCategories,
  sortingProducts,
} from "./store/actions/productsActions";

import Options from "./Options";
import FiltersContent from "./FilterContent";
import Header from "./Header";

import styled from "styled-components";
import filtersIcon from "./assets/svg/filters.svg";

import CatalogProducts from "./CatalogProducts";
import {
  ALPHABET_ASC,
  ALPHABET_DESC,
  PRICE_ASC,
  PRICE_DESC,
} from "./store/constans/productsConstans";

export const options = [
  { value: ALPHABET_ASC, label: "Alphabetically, A-Z" },
  { value: ALPHABET_DESC, label: "Alphabetically, Z-A" },
  { value: PRICE_ASC, label: "Price, low to high" },
  { value: PRICE_DESC, label: "Price, high to low" },
];

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;

const CatalogPageWrapper = styled.div`
  width: 100%;
`;
const ContentWrapper = styled.div`
  max-width: 1500px;
  margin: 20px auto;
  padding-left: 20px;
`;
const CatalogOptionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductsFilter = styled.button`
  background-image: url(${filtersIcon});
  background-size: 21px;
  background-repeat: no-repeat;
  background-position: 10px 50%;
  padding: 10px 20px 10px 40px;
  border: 1px solid black;

  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;
const SelectProductsOptions = styled(Select)`
  width: 200px;
  margin-right: 20px;
`;

const FiltersWrapper = styled.div`
  display: none;
  width: 20%;
  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

const transformArraysToArray = (state) => {
  const {
    categories,
    items: { items },
  } = state;
  return categories.selectedCategories?.reduce((products, selectedCategory) => {
    return [...products, ...items[selectedCategory]];
  }, []);
};

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const selectedProducts = useSelector(transformArraysToArray);
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const itemsValues = Object.values(items).flat();

  const handleToggleAsideFilters = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  const setSelected = (checkedCategory) => {
    dispatch(filterCategories(checkedCategory));
  };

  return (
    <CatalogPageWrapper>
      <Header />
      <ContentWrapper>
        <CatalogOptionFilter>
          <ProductsFilter onClick={handleToggleAsideFilters}>
            Products
          </ProductsFilter>
          <SelectProductsOptions
            options={options}
            onChange={(option) => dispatch(sortingProducts(option.value))}
          />
        </CatalogOptionFilter>
        <ProductsWrapper>
          <Options
            isActive={isFiltersVisible}
            close={handleToggleAsideFilters}
            setCategoryFilter={setSelected}
          />
          <FiltersWrapper>
            <FiltersContent
              setCategoryFilter={setSelected}
              setProducts={selectedProducts}
            />
          </FiltersWrapper>
          <CatalogProducts itemsValues={itemsValues} />
        </ProductsWrapper>
      </ContentWrapper>
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
