import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
// export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_FETCHED = "EVENT_FETCHED";
// export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const EVENT_UPDATE_SUCCESS = "EVENT_UPDATE_SUCCESS";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  console.log("test");
  // if (getState().events) return;

  request(`${baseUrl}/events`)
    .then(response => {
      console.log("RESPONSE:", response);
      dispatch(eventsFetched(response.body.events));
    })
    .catch(console.error);
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
  console.log(id, formValues);
  const newEvent = formValues;
  newEvent.id = id;

  request
    .put(`${baseUrl}/event/${id}`)
    .send(newEvent) //to send the data to the DB
    .then(() => {
      dispatch(eventUpdateSuccess(newEvent));
    })
    .catch(console.error);
};

