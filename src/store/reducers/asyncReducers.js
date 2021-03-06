import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
} from "../constans/asyncConstans";

const initialState = {
  loading: false,
  error: null,
};

export default function asyncReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
