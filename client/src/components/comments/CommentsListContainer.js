// import React from "react";
// import { getComments } from "../../actions/comments";
// import { connect } from "react-redux";
// import CommentsList from "./CommentsList";

// class CommentsListContainer extends React.Component {
//   componentDidMount() {
//     this.props.getComments();
//   }

//   render() {
  
//     return (
//       <div>
//         <CommentsList comments={this.props.comments} ticket={this.props.ticket} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   ticket: state.ticket  === null
//   ? null
//   : Object.values(state.tickets).sort((a, b) => b.id - a.id),
//   comments:
//     state.comments === null
//       ? null
//       : Object.values(state.comments).sort((a, b) => b.id - a.id)
// });

// export default connect(
//   mapStateToProps,
//   { getComments }
// )(CommentsListContainer);