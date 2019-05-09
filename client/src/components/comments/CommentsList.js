import React, { Component } from "react";
import "./CommentForm.css";

export default class CommentsList extends Component {
  renderComment = comment => {
    return (
      <div className="Comments" key={comment.id}>
        User Id: {comment.userId} <br />
        Comment: {comment.comment} <br /> <br />
      </div>
    );
  };

  render() {
    const { comments } = this.props;
    console.log("COMMENT LIST", this.props.ticket);
    const checkComments = comments.map(comment =>
      comment.filter(c => c.ticketId === this.props.ticket.id)
    );
    return (
      <div className="CommentsList">
        {!comments && "Loading..."}

        {comments && (
          <div className="Comments">
            <h2>Comments:</h2>

            {checkComments.map(comment =>
              comment.map(t => this.renderComment(t))
            )}
          </div>
        )}
      </div>
    );
  }
}
