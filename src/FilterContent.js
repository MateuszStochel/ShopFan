import React from "react";

import { useDispatch } from "react-redux";

import CategoriesFilter from "./CategoriesFilter";
import { setSelectedProducts } from "./store/actions/productsActions";

import styled from "styled-components";

const OptionsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 25px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonApply = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid black;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 20px;
`;
const ButtonClear = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  background-color: black;
  color: white;
  font-size: 20px;
`;

const FiltersCategories = ({ setCategoryFilter, setProducts }) => {
  const dispatch = useDispatch();

  const clearSelectedCategories = () => {
    setCategoryFilter(null);
    dispatch(setSelectedProducts(null));
  };

  return (
    <>
      <Header>Categories</Header>
      <OptionsWrapper>
        <CategoriesFilter setCategoryFilter={setCategoryFilter} />
        <ButtonsWrapper>
          <ButtonApply
            onClick={() => dispatch(setSelectedProducts(setProducts))}
          >
            Apply
          </ButtonApply>
          <ButtonClear onClick={clearSelectedCategories}>Clear</ButtonClear>
        </ButtonsWrapper>
      </OptionsWrapper>
    </>
  );
};

export default FiltersCategories;
