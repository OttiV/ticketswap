import request from "superagent";
import { baseUrl } from "../constants";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const COMMENT_CREATE_SUCCESS = "COMMENT_CREATE_SUCCESS";
export const COMMENT_FETCHED = "COMMENT_FETCHED";
export const COMMENT_UPDATE_SUCCESS = "COMMENT_UPDATE_SUCCESS";

const fetchComments = comments => ({
  type: FETCH_COMMENTS,
  comments
});

export const loadComments = () => dispatch => {
  request
    .get(`${baseUrl}/comments`)
    .then(response => {
      console.log("response:", response);
      dispatch(fetchComments(response.body));
    })
    .catch(err => console.error(err));  
};

export const commentFetched = comment => ({
  type: COMMENT_FETCHED,
  comment
});

export const loadComment = id => dispatch => {
  request
    .get(`${baseUrl}/comments/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(commentFetched(response.body));
    })
    .catch(console.error);
};

export const commentCreateSuccess = comment => ({
  type: COMMENT_CREATE_SUCCESS,
  comment
});

export const createComment = data => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  // if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/comments`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      console.log("RESPONSE CREATE COMMENT", response)
      dispatch(commentCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const commentUpdateSuccess = comment => ({
  type: COMMENT_UPDATE_SUCCESS,
  comment
});

export const updateComment = (id, formValues) => dispatch => {
  console.log("UPDATE COMMENT TEST", id, formValues);
  const newComment = formValues;
  newComment.id = id;

  request
    .put(`${baseUrl}/comments/${id}`)
    .send(newComment)
    .then(() => {
      dispatch(commentUpdateSuccess(newComment));
    })
    .catch(console.error);
};
