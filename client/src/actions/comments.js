import * as request from "superagent";
import { baseUrl } from "../constants";
import { logout } from "./users";
import { isExpired } from "../jwt";

export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";

const updateComments = comments => ({
  type: UPDATE_COMMENTS,
  payload: comments
});

const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

const updateCommentSuccess = () => ({
  type: UPDATE_COMMENT_SUCCESS
});

export const getComments = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/comments`)
    .then(result => {
      dispatch(updateComments(result.body));
    })
    .catch(err => console.error(err));
};

export const createComment = data => (dispatch, getState) => {
  console.log(data);
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/comments`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      console.log(result.body);
      dispatch(addComment(result.body));
    })
    .catch(err => console.error(err));
};

export const updateComment = (commentId, position) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .patch(`${baseUrl}/comments/${commentId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(position)
    .then(_ => dispatch(updateCommentSuccess()))
    .catch(err => console.error(err));
};
