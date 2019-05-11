import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/comments";
import { userId } from "../../jwt";
import CommentForm from "./CommentForm";

class CommentFormContainer extends React.Component {
  state = {
    comment: "",
    userId: this.props.userId,
    ticketId: this.props.ticketId
  };

  onChange = comment => {
    this.setState({
      ...this.state.formValues,
      [comment.target.name]: comment.target.value
    });
  };

  onSubmit = comment => {
    this.props.createComment(this.state);
    comment.preventDefault();
    this.setState({
      comment: "",
      userId: this.props.userId,
      ticketId: this.props.ticketId
    });
  };

  render() {
    const { authenticated } = this.props;
    // const { comment, ticket } = this.props;

    console.log("COMMENT LIST", this.props);
    // const checkComments = comment.map(comment =>
    //   comment.filter(c => c.userId === this.props.user.id))
    // const checkTickets = comment.map(comment =>
    //   comment.filter(c => c.ticketId === this.props.ticket.id))
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
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users === null ? null : state.users,
  ticketId: state.ticket.id,
  ticket: state.ticket,
  comment: state.comment
});
export default connect(
  mapStateToProps,
  { createComment }
)(CommentFormContainer);
