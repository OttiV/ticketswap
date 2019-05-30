import * as request from "superagent";
import { baseUrl } from "../constants";
import { logout } from "./users";
import { isExpired } from "../jwt";

export const ADD_TICKET = "ADD_TICKET";
export const UPDATE_TICKET = "UPDATE_TICKET";
export const UPDATE_TICKETS = "UPDATE_TICKETS";
export const JOIN_TICKET_SUCCESS = "JOIN_TICKET_SUCCESS";
export const UPDATE_TICKET_SUCCESS = "UPDATE_TICKET_SUCCESS";

const updateTickets = tickets => ({
  type: UPDATE_TICKETS,
  payload: tickets
});

const addTicket = ticket => ({
  type: ADD_TICKET,
  payload: ticket
});

const updateTicketSuccess = () => ({
  type: UPDATE_TICKET_SUCCESS
});

export const getTickets = () => (dispatch, getState) => {
  // const state = getState();
  // if (!state.currentUser) return null;
  // const jwt = state.currentUser.jwt;

  // if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/tickets`)
    // .set("Authorization", `Bearer ${jwt}`)
    .then(result => {
      console.log("result.body for tickets", result.body);
      dispatch(updateTickets(result.body));
    })
    .catch(err => console.error(err));
};

export const createTicket = data => (dispatch, getState) => {
  console.log(data);
  const state = getState();
  const jwt = state.currentUser.jwt;

  // if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/tickets`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      console.log(result.body);
      dispatch(addTicket(result.body));
    })
    .catch(err => console.error(err));
};

export const updateTicket = (ticketId, position) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .patch(`${baseUrl}/tickets/${ticketId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(position)
    .then(_ => dispatch(updateTicketSuccess()))
    .catch(err => console.error(err));
};

// export const ticketUpdateSuccess = ticket => ({
//   type: TICKET_UPDATE_SUCCESS,
//   ticket
// });

// export const updateTicket = (id, formValues) => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   // if (isExpired(jwt)) return dispatch(logout());
//   const newTicket = formValues;
//   newTicket.id = id;

//   request
//     .put(`${baseUrl}/tickets/${id}`)
//     .set("Authorization", `Bearer ${jwt}`)
//     .send(newTicket)
//     .then(() => {
//       dispatch(ticketUpdateSuccess(newTicket));
//     })
//     .catch(console.error);

// import request from "superagent";
// import { baseUrl } from "../constants";
// import { isExpired } from "../jwt";
// import { logout } from "./users";
// export const FETCH_TICKETS = "FETCH_TICKETS";
// export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
// export const TICKET_FETCHED = "TICKET_FETCHED";
// export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";

// const fetchTickets = tickets => ({
//   type: FETCH_TICKETS,
//   tickets
// });

// export const loadTickets = () => dispatch => {
//   request
//     .get(`${baseUrl}/tickets`)
//     .then(response =>{
//       dispatch(fetchTickets(response.body))
//     })
//     .catch(err => console.error(err));
// };

// export const ticketFetched = ticket => ({
//   type: TICKET_FETCHED,
//   ticket
// });

// export const loadTicket = id => dispatch => {
//   request
//     .get(`${baseUrl}/tickets/${id}`)
//     .then(response => {
//       dispatch(ticketFetched(response.body));
//     })
//     .catch(console.error);
// };

// export const ticketCreateSuccess = ticket => ({
//   type: TICKET_CREATE_SUCCESS,
//   ticket
// });

// export const createTicket = data => dispatch => {
//   request
//     .post(`${baseUrl}/tickets`)
//     .send(data)
//     .then(response => {
//       dispatch(ticketCreateSuccess(response.body));
//     })
//     .catch(console.error);
// };

// export const ticketUpdateSuccess = ticket => ({
//   type: TICKET_UPDATE_SUCCESS,
//   ticket
// });

// export const updateTicket = (id, formValues) => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   // if (isExpired(jwt)) return dispatch(logout());
//   const newTicket = formValues;
//   newTicket.id = id;

//   request
//     .put(`${baseUrl}/tickets/${id}`)
//     .set("Authorization", `Bearer ${jwt}`)
//     .send(newTicket)
//     .then(() => {
//       dispatch(ticketUpdateSuccess(newTicket));
//     })
//     .catch(console.error);
// };

// import * as request from "superagent";
// import { baseUrl } from "../constants";
// import { logout } from "./users";
// import { isExpired } from "../jwt";

// export const ADD_TICKET = "ADD_TICKET";
// export const UPDATE_TICKET = "UPDATE_TICKET";
// export const UPDATE_TICKETS = "UPDATE_TICKETS";
// export const JOIN_TICKET_SUCCESS = "JOIN_TICKET_SUCCESS";
// export const UPDATE_TICKET_SUCCESS = "UPDATE_TICKET_SUCCESS";

// const updateTickets = tickets => ({
//   type: UPDATE_TICKETS,
//   payload: tickets
// });

// const addTicket = ticket => ({
//   type: ADD_TICKET,
//   payload: ticket
// });

// const updateTicketSuccess = () => ({
//   type: UPDATE_TICKET_SUCCESS
// });

// export const getTickets = () => (dispatch, getState) => {
//   // const state = getState();
//   // if (!state.currentUser) return null;
//   // const jwt = state.currentUser.jwt;

//   // if (isExpired(jwt)) return dispatch(logout());

//   request
//     .get(`${baseUrl}/tickets`)
//     // .set("Authorization", `Bearer ${jwt}`)
//     .then(result => {

//       dispatch(updateTickets(result.body))})
//     .catch(err => console.error(err));
// };

// export const createTicket = data => (dispatch, getState) => {
//   console.log(data)
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   // if (isExpired(jwt)) return dispatch(logout());

//   request
//     .post(`${baseUrl}/tickets`)
//     .set("Authorization", `Bearer ${jwt}`)
//     .send(data)
//     .then(result => {
//       console.log(result.body)
//       dispatch(addTicket(result.body))})
//     .catch(err => console.error(err));
// };

// export const updateTicket = (ticketId, position) => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   if (isExpired(jwt)) return dispatch(logout());

//   request
//     .patch(`${baseUrl}/tickets/${ticketId}`)
//     .set("Authorization", `Bearer ${jwt}`)
//     .send(position)
//     .then(_ => dispatch(updateTicketSuccess()))
//     .catch(err => console.error(err));
// };

// // export const ticketUpdateSuccess = ticket => ({
// //   type: TICKET_UPDATE_SUCCESS,
// //   ticket
// // });

// // export const updateTicket = (id, formValues) => (dispatch, getState) => {
// //   const state = getState();
// //   const jwt = state.currentUser.jwt;

// //   // if (isExpired(jwt)) return dispatch(logout());
// //   const newTicket = formValues;
// //   newTicket.id = id;

// //   request
// //     .put(`${baseUrl}/tickets/${id}`)
// //     .set("Authorization", `Bearer ${jwt}`)
// //     .send(newTicket)
// //     .then(() => {
// //       dispatch(ticketUpdateSuccess(newTicket));
// //     })
// //     .catch(console.error);
