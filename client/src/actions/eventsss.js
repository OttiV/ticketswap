// import request from "superagent";
// import { baseUrl } from "../constants";
// export const FETCH_EVENTS = "FETCH_EVENTS";
// export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
// export const EVENT_FETCHED = "EVENT_FETCHED";


// const fetchEvents = events => ({
//   type: FETCH_EVENTS,
//   events
// });

// export const loadEvents = () => dispatch => {
//   request
//     .get(`${baseUrl}/events`)
//     .then(response => {
//       dispatch(fetchEvents(response.body));
//     })
//     .catch(err => console.error(err));
// };

// export const eventFetched = event => ({
//   type: EVENT_FETCHED,
//   event
// });

// export const loadEvent = id => dispatch => {
//   request
//     .get(`${baseUrl}/events/${id}`)
//     .then(response => {
//       dispatch(eventFetched(response.body));
//     })
//     .catch(console.error);
// };

// export const eventCreateSuccess = event => ({
//   type: EVENT_CREATE_SUCCESS,
//   event
// });

// export const createEvent = data => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .post(`${baseUrl}/events`)
//     .set("Authorization", `Bearer ${jwt}`)
//     .send(data)
//     .then(response => {
//       dispatch(eventCreateSuccess(response.body));
//     })
//     .catch(console.error);
// };


