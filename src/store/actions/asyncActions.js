import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
} from "../constans/asyncConstans";

export function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START,
  };
}

export function asyncActionFinish() {
  return {
    type: ASYNC_ACTION_FINISH,
  };
}

export function asyncActionError() {
  return {
    type: ASYNC_ACTION_ERROR,
  };
}
