import { FETCH_TICKETS, TICKET_UPDATE_SUCCESS, TICKET_CREATE_SUCCESS } from "../actions/tickets";

export default (state = [], action = []) => {
  console.log("ACTIONS:", action);
  switch (action.type) {
    case FETCH_TICKETS:
      return action.tickets;

    case TICKET_CREATE_SUCCESS:
      return [...state, action.ticket];

    case TICKET_UPDATE_SUCCESS:
      return action.ticket;

    default:
      return state;
  }
};
