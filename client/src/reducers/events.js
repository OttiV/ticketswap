import { FETCH_EVENTS, EVENT_UPDATE_SUCCESS } from "../actions/events";

export default (state = [], action = []) => {
  console.log("ACTIONS:", action);
  switch (action.type) {
    case FETCH_EVENTS:
      return action.events;

    case EVENT_UPDATE_SUCCESS:
      return action.event;

    default:
      return state;
  }
};
