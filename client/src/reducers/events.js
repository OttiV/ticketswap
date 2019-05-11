import { ADD_EVENT, UPDATE_EVENT, UPDATE_EVENTS } from "../actions/events";

export default (state = null, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_EVENT:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_EVENTS:
      console.log("PAYLOAD", payload);
      return payload.reduce((events, event) => {
          events[event.id] = event;
          return events;
        }, {});
        
          // payload: payload
        
      //   ...state,
      //   [payload.id]: payload
      // };

    default:
      return state;
  }
};
