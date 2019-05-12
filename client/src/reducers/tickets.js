import { ADD_TICKET, UPDATE_TICKET, UPDATE_TICKETS } from "../actions/tickets";

export default (state = null, { type, payload }) => {
  console.log("type, payload", type, payload);
  switch (type) {
    case ADD_TICKET:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_TICKET:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_TICKETS:
      console.log("PAYLOAD", payload);
      return payload.reduce((tickets, ticket) => {
        tickets[ticket.id] = ticket;
        return tickets;
      }, {});

    // payload: payload

    //   ...state,
    //   [payload.id]: payload
    // };

    default:
      return state;
  }
};

// import { FETCH_TICKETS, TICKET_UPDATE_SUCCESS, TICKET_CREATE_SUCCESS } from "../actions/tickets";

// export default (state = [], action = []) => {
//   console.log("TICKET ACTIONS:", action);
//   switch (action.type) {
//     case FETCH_TICKETS:
//       return action.tickets;

//     case TICKET_CREATE_SUCCESS:
//       return [...state, action.ticket];

//     case TICKET_UPDATE_SUCCESS:
//       return action.ticket;

//     default:
//       return state;
//   }
// };
