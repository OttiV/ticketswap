import request from "superagent";
import { baseUrl } from "../constants";
export const FETCH_TICKETS = "FETCH_TICKETS";
export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";

const fetchTickets = tickets => ({
  type: FETCH_TICKETS,
  tickets
});

export const loadTickets = () => dispatch => {
  const state = getState();
  request
    .get(`${baseUrl}/tickets`)
    .then(response =>
      // console.log("response:", response.body),
      dispatch(fetchTickets(response.body))
    )
    .catch(err => console.error(err));
};

export const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
});

export const loadTicket = id => dispatch => {
  request
    .get(`${baseUrl}/tickets/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

export const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  ticket
});

export const createTicket = data => dispatch => {
  request
    .post(`${baseUrl}/tickets`)
    .send(data)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const ticketUpdateSuccess = ticket => ({
  type: TICKET_UPDATE_SUCCESS,
  ticket
});

export const updateTicket = (id, formValues) => dispatch => {
  console.log("UPDATE TICKET TEST", id, formValues);
  const newTicket = formValues;
  newTicket.id = id;

  request
    .put(`${baseUrl}/tickets/${id}`)
    .send(newTicket)
    .then(() => {
      dispatch(ticketUpdateSuccess(newTicket));
    })
    .catch(console.error);
};
