import { FETCH_EVENTS } from "../constans/fetchConstans";

export function listenToEvents(events) {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
}
