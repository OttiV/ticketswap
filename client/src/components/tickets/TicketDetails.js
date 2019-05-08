import React, { Component } from "react";
import TicketForm from "./TicketForm";
import CommentsListContainer from "../comments/CommentsListContainer";

import { Link } from "react-router-dom";
import "../events/EventDetails.css";

export default class TicketDetails extends Component {
  renderComment = comment => {
    console.log("TICKETS AND COMMENTS PROPS", this.props);
    return (
      <div className="Comments" key={comment.id}>
        User Id: {comment.userId} <br />
        Comment: {comment.comment} <br /> <br />
      </div>
    );
  };
  render() {
    // console.log("COMMENTS IN TICK DET", this.props.ticket.comments);
    // const comments = this.props.ticket.comments;
    return (
      <div className="EventDetailsContainer">
        {this.props.ticket && !this.props.editMode && (
          <div className="EventDetails">
            <img
              className="images"
              src={this.props.ticket.picture}
              alt={this.props.ticket.description}
            />
            <p>Description: {this.props.ticket.description} </p>
            <p>Price: € {this.props.ticket.price} </p>
            <button className="EventDetailsButtons" onClick={this.props.onEdit}>
              Edit
            </button>
            <CommentsListContainer comments={this.props.comments} tickets={this.props.tickets} />
            {/* <div className="CommentsList">
              {comments < 1 && "No comments have been posted"}
              {comments && comments > 0 && (
                <div>
                  <h2>Comments:</h2>

                  {comments.map(c => c.map(comment => this.renderComment(comment)))}
                </div>
              )}
            </div> */}
          </div>
        )}
        {this.props.editMode && (
          <div className="EventForm">
            <TicketForm
              values={this.props.formValues}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
              ticket={this.props.ticket}
            />
          </div>
        )}

        {/* ADD COMMENT SECTION 
      only if signed in
      with textarea*/}

        <Link to="/">
          <button className="EventDetailsButtons">Home</button>
        </Link>
      </div>
    );
  }
}

