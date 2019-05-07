import request from "superagent";
import { baseUrl } from "../constants";
export const FETCH_EVENTS = "FETCH_EVENTS";
// export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_FETCHED = "EVENT_FETCHED";
// export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const EVENT_UPDATE_SUCCESS = "EVENT_UPDATE_SUCCESS";

const fetchEvents = events => ({
  type: FETCH_EVENTS,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  console.log("test");
  const state = getState();
  request
    .get(`${baseUrl}/events`)
    .then(response =>
      // console.log("response:", response.body),
      dispatch(fetchEvents(response.body))
    )
    .catch(err => console.error(err));

  // request(`${baseUrl}/events`)
  //   .then(response => {
  //     console.log("RESPONSE:", response);
  //     dispatch(eventsFetched(response.body.events));
  //   })
  //   .catch(console.error);
};

export const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

export const loadEvent = id => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};
export const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
});

export const updateEvent = (id, formValues) => dispatch => {
  console.log("UPDATE EVENT TEST", id, formValues);
  const newEvent = formValues;
  newEvent.id = id;

  request
    .put(`${baseUrl}/event/${id}`)
    .send(newEvent)
    .then(() => {
      dispatch(eventUpdateSuccess(newEvent));
    })
    .catch(console.error);
};
