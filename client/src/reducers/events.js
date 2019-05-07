import { EVENTS_FETCHED, EVENT_UPDATE_SUCCESS } from "../actions/events";

export default (state = [], action = []) => {
  console.log("ACTIONS:", action);
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;

    case EVENT_UPDATE_SUCCESS:
      return action.event;

    default:
      return state;
  }
};

