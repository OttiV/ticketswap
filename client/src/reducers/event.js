import { EVENT_FETCHED, EVENT_UPDATE_SUCCESS } from "../actions/events";

export default (state = [], action = []) => {
  console.log("ACTION:", action);
  switch (action.type) {
    case EVENT_FETCHED:
    return action.event;
    
    case EVENT_UPDATE_SUCCESS:
      if (state.id === action.event.id) {
        return action.event;
      }

      return state;

    default:
      return state;
  }
};

