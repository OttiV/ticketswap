import React from "react";
import { loadComments } from "../../actions/comments";
import { connect } from "react-redux";
import CommentsList from "./CommentsList";

class CommentsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    console.log("COMMENT LIST CONTAINER", this.props);
    return (
      <div>
        <CommentsList comments={this.props.comments} ticket={this.props.ticket} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments:
    state.comments === null
      ? null
      : Object.values(state.comments).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { loadComments }
)(CommentsListContainer);