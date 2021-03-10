import { options } from "../../CatalogPage";
import {
  FILTER_CATEGORIES,
  SET_SELECTED_PRODUCTS,
  SORTING_PRODUCTS,
} from "../constans/productsConstans";

const initialState = {
  selectedCategories: null,
  selectedProducts: null,
  selectedSortOption: options[2].value,
};

export default function categoriesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FILTER_CATEGORIES:
      const mySelectedCategories = new Set(state.selectedCategories);
      mySelectedCategories.has(payload)
        ? mySelectedCategories.delete(payload)
        : mySelectedCategories.add(payload);
      const mySelectedCategoriesArray =
        payload === null ? [] : Array.from(mySelectedCategories);

      return {
        ...state,
        selectedCategories: mySelectedCategoriesArray.length
          ? mySelectedCategoriesArray
          : null,
      };
    case SET_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: payload,
      };
    case SORTING_PRODUCTS:
      return {
        ...state,
        selectedSortOption: payload,
      };
    default:
      return state;
  }
}
