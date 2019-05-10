import {
  FETCH_EVENTS,
  EVENT_UPDATE_SUCCESS,
  EVENT_CREATE_SUCCESS
} from "../actions/events";

export default (state = [], action = []) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.events;

    case EVENT_CREATE_SUCCESS:
      return [...state, action.event];

    case EVENT_UPDATE_SUCCESS:
      return action.event;

    default:
      return state;
  }
};
