import { FETCH_EVENTS, EVENT_CREATE_SUCCESS } from "../actions/eventsss";

export default (state = [], action = []) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.events;

    case EVENT_CREATE_SUCCESS:
      return [...state, action.event];

    default:
      return state;
  }
};
