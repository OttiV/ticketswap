import { COMMENT_FETCHED, COMMENT_UPDATE_SUCCESS } from "../actions/comments";

export default (state = [], action = []) => {
  switch (action.type) {
    case COMMENT_FETCHED:
    return action.comment;
    
    case COMMENT_UPDATE_SUCCESS:
      if (state.id === action.comment.id) {
        return action.comment;
      }

      return state;

    default:
      return state;
  }
};
