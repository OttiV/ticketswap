import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/comments";
import CommentForm from "./CommentForm";

class CommentFormContainer extends React.Component {
  state = {
    comment: ""
  };

  onChange = comment => {
    this.setState({
      [comment.target.name]: comment.target.value
    });
  };

  onSubmit = comment => {
    this.props.createComment(this.state);
    comment.preventDefault();
    this.setState({
      comment: ""
    });
  };

  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {authenticated && (
          <CommentForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            authenticated={this.props.authenticated}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  comment:
    state.comment === null
      ? null
      : Object.values(state.events).sort((a, b) => b.id - a.id)
});
export default connect(
  mapStateToProps,
  { createComment }
)(CommentFormContainer);
