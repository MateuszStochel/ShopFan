import {
  FILTER_CATEGORIES,
  SET_SELECTED_PRODUCTS,
  SORTING_PRODUCTS,
} from "../constans/productsConstans";

export function filterCategories(filterCategories) {
  return {
    type: FILTER_CATEGORIES,
    payload: filterCategories,
  };
}

export function setSelectedProducts(selectedProducts) {
  return {
    type: SET_SELECTED_PRODUCTS,
    payload: selectedProducts,
  };
}

export function sortingProducts(sortingOptions) {
  return {
    type: SORTING_PRODUCTS,
    payload: sortingOptions,
  };
}
