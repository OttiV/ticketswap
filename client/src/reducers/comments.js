import { ADD_COMMENT, UPDATE_COMMENT, UPDATE_COMMENTS } from "../actions/comments";

export default (state = null, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        [payload.id]: payload
      };

    case UPDATE_COMMENTS:
      return payload.reduce((comments, comment) => {
          comments[comment.id] = comment;
          return comments;
        }, {});
        

    default:
      return state;
  }
};

// import { FETCH_COMMENTS, COMMENT_CREATE_SUCCESS } from "../actions/comments";

// export default (state = [], action = []) => {
//   switch (action.type) {
//     case FETCH_COMMENTS:
//       return action.comments;

//     case COMMENT_CREATE_SUCCESS:
//       return [...state, action.comment];

//     default:
//       return state;
//   }
// };

