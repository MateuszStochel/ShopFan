import { FETCH_CATEGORIES, FETCH_EVENTS } from "../constans/fetchConstans";

export function listenToEvents(events) {
  return {
    type: FETCH_EVENTS,
    payload: events.reduce(
      (groupedEventsByCategory, currentEvent) => ({
        ...groupedEventsByCategory,
        [currentEvent["category"]]: (
          groupedEventsByCategory[currentEvent["category"]] || []
        ).concat(currentEvent),
      }),
      {}
    ),
  };
}

export function listenToCategories(categories) {
  return {
    type: FETCH_CATEGORIES,
    payload: categories,
  };
}
