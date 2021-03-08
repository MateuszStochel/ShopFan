import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

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

const CategoriesFilter = ({ setCategoryFilter, categoryFilter }) => {
  const { items } = useSelector((state) => state.items);

  const products = items.map((item) => (
    <FilterWrapper>
      <CategoryWrapper
        isActive={categoryFilter?.some(
          (category) => category === item.category
        )}
        onClick={() => setCategoryFilter(item.category)}
      >
        <Category>{item.category}</Category>
        <Select />
      </CategoryWrapper>
    </FilterWrapper>
  ));

  return <>{products}</>;
};

export default CategoriesFilter;
