import { FETCH_COMMENTS, COMMENT_UPDATE_SUCCESS, COMMENT_CREATE_SUCCESS } from "../actions/comments";

export default (state = [], action = []) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.comments;

    case COMMENT_CREATE_SUCCESS:
      return [...state, action.comment];

    case COMMENT_UPDATE_SUCCESS:
      return action.comment;

    default:
      return state;
  }
};