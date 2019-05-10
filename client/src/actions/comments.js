import request from "superagent";
import { baseUrl } from "../constants";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const COMMENT_CREATE_SUCCESS = "COMMENT_CREATE_SUCCESS";
export const COMMENT_FETCHED = "COMMENT_FETCHED";

const fetchComments = comments => ({
  type: FETCH_COMMENTS,
  comments
});

export const loadComments = () => dispatch => {
  request
    .get(`${baseUrl}/comments`)
    .then(response => {
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

  request
    .post(`${baseUrl}/comments`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(commentCreateSuccess(response.body));
    })
    .catch(console.error);
};
