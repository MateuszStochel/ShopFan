import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import filtersIcon from "./assets/svg/filters.svg";
import Select from "react-select";
import Options from "./Options";
import FiltersContent from "./FilterContent";
import { useDispatch, useSelector } from "react-redux";
import { filterCategories } from "./store/actions/productsActions";

const options = [
  { value: "featured", label: "Featured" },
  { value: "priceLowToHigh", label: "Price low to high" },
  { Value: "priceHighToLow", label: "Price high to low" },
];
const CategoryWrapper = styled.div`
  display: flex;
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
  width: 100%;
  justify-content: space-between;
`;
const CatalogProducts = styled.div``;
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
const SelectOptions = styled(Select)`
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

const CatalogPage = () => {
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const { selectedCategories } = useSelector((state) => state.categories);

  const handleToggleAsideFilters = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  const setSelected = (checkedCategory) => {
    const mySelectedCategories = new Set(selectedCategories);
    mySelectedCategories.has(checkedCategory)
      ? mySelectedCategories.delete(checkedCategory)
      : mySelectedCategories.add(checkedCategory);
    const mySelectedCategoriesArray = Array.from(mySelectedCategories);
    dispatch(
      filterCategories(
        mySelectedCategoriesArray.length ? mySelectedCategoriesArray : null
      )
    );
  };

  const selectedProducts = selectedCategories?.reduce(
    (products, selectedCategory) => {
      return [...products, ...items[selectedCategory]];
    },
    []
  );

  return (
    <CatalogPageWrapper>
      <Header />
      <ContentWrapper>
        <CatalogOptionFilter>
          <ProductsFilter onClick={handleToggleAsideFilters}>
            Products
          </ProductsFilter>
          <SelectOptions options={options} />
        </CatalogOptionFilter>
        <CategoryWrapper>
          <Options
            isActive={isFiltersVisible}
            close={handleToggleAsideFilters}
            setCategoryFilter={setSelected}
          />
          <FiltersWrapper>
            <FiltersContent setCategoryFilter={setSelected} />
          </FiltersWrapper>
          <CatalogProducts />
        </CategoryWrapper>
      </ContentWrapper>
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
