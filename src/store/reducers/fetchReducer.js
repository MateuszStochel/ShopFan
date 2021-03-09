import { FETCH_CATEGORIES, FETCH_EVENTS } from "../constans/fetchConstans";

const initialState = {
  items: [],
  categories: [],
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_EVENTS:
      return {
        ...state,
        items: payload,
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
}
