import { FETCH_EVENTS } from "../constans/fetchConstans";

const initialState = {
  items: [],
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_EVENTS:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
}
