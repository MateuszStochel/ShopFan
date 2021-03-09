import { FILTER_CATEGORIES } from "../constans/productsConstans";

export function filterCategories(filterCategories) {
  return {
    type: FILTER_CATEGORIES,
    payload: filterCategories,
  };
}
