import React, { Component } from "react";



export default class CommentsList extends Component {
  renderComment = comment => {
    return (
        <div className="Comments" key={comment.id}>
        User Id: {comment.userId} <br />
        Comment: {comment.comment} <br/>  <br/>
      </div>
    );
  };

  render() {
    const { comments } = this.props;
    console.log("COMMENT LIST", this.props)
    // const checkComments = comments.map(i =>
    //   i.filter(t => t.ticketId === this.props.tickets.id)
    // );
    return (
      <div className="CommentsList">
        {!comments && "Loading..."}

        {comments && (
            <div>
            <h2>Comments:</h2>
              {comments.map(comment =>
                comment.map(t => this.renderComment(t))
              )}
            </div>
          
        )}
      </div>
    );
  }
}