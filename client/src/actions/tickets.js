import request from "superagent";
import { baseUrl } from "../constants";
import { isExpired } from "../jwt";
import { logout } from "./users";
export const FETCH_TICKETS = "FETCH_TICKETS";
export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";

const fetchTickets = tickets => ({
  type: FETCH_TICKETS,
  tickets
});

export const loadTickets = () => dispatch => {
  request
    .get(`${baseUrl}/tickets`)
    .then(response =>{
      console.log("response:", response);
      dispatch(fetchTickets(response.body))
    })
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

export const updateTicket = (id, formValues) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  // if (isExpired(jwt)) return dispatch(logout());
  const newTicket = formValues;
  newTicket.id = id;

  request
    .put(`${baseUrl}/tickets/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(newTicket)
    .then(() => {
      dispatch(ticketUpdateSuccess(newTicket));
    })
    .catch(console.error);
};
