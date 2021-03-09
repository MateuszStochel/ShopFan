import { FILTER_CATEGORIES } from "../constans/productsConstans";

const initialState = {
  selectedCategories: null,
};

export default function categoriesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FILTER_CATEGORIES:
      return {
        ...state,
        selectedCategories: payload,
      };
    default:
      return state;
  }
}
