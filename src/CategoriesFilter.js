import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { filterCategories } from "./store/actions/productsActions";

const FilterWrapper = styled.div`
  width: 100%;
`;
const Category = styled.div`
  color: grey;
  font-size: 20px;
`;
const Select = styled.div`
  width: 17px;
  height: 17px;
  border: 3px solid grey;
  border-radius: 50%;
  text-transform: capitalize;
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-top: 15px;
  width: 100%;
  cursor: pointer;
  &:hover ${Category} {
    color: black;
  }
  &:hover ${Select} {
    border-color: black;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      ${Category} {
        color: black;
      }
      ${Select} {
        background-color: black;
        border-color: black;
      }
    `}
`;

const CategoriesFilter = ({ setCategoryFilter }) => {
  const { categories } = useSelector((state) => state.items);
  const { selectedCategories } = useSelector((state) => state.categories);

  const products = categories?.map(({ category }) => (
    <FilterWrapper>
      <CategoryWrapper
        isActive={selectedCategories?.some(
          (categorys) => categorys === category
        )}
        onClick={() => setCategoryFilter(category)}
      >
        <Category>{category}</Category>
        <Select />
      </CategoryWrapper>
    </FilterWrapper>
  ));

  return <>{products}</>;
};

export default CategoriesFilter;
