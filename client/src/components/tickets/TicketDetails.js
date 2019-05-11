import React, { Component } from "react";
import TicketForm from "./TicketForm";
// import CommentsListContainer from "../comments/CommentsListContainer";
import { Animated } from "react-animated-css";
import "../events/EventDetails.css";
import "./TicketsList.css";

export default class TicketDetails extends Component {
  renderComment = comment => {
    return (
      <div className="Comments" key={comment.id}>
        User Id: {comment.userId} <br />
        Comment: {comment.comment} <br /> <br />
      </div>
    );
  };
  render() {
    const comments = this.props.thisTicket.comments;

    const { authenticated, editMode, thisTicket } = this.props;
    

    return (
      <div className="EventDetailsContainer">
        {this.props.thisTicket && !this.props.editMode && (
          <div className="EventDetails">
            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2>Seller: User #{this.props.thisTicket.userId}</h2>

              <img
                className="images"
                src={this.props.thisTicket.picture}
                alt={this.props.thisTicket.description}
              />
              <p>Description: {this.props.thisTicket.description} </p>
              <p>Price: € {this.props.thisTicket.price} </p>
            </Animated>
            {/* {authenticated && (
              <button
                className="EventDetailsButtons"
                onClick={this.props.onEdit}
              >
                Edit
              </button>
            )} */}
            {/* <CommentsListContainer
              comments={this.props.comments}
              tickets={this.props.tickets}
            /> */}
            <div className="CommentsList">
              {comments.length < 1 && "No comments have been posted"}
              {comments && comments.length > 0 && (
                <div>
                  <h2>Comments:</h2>

                  {comments.map(comment => this.renderComment(comment))}
                </div>
              )}
            </div>
          </div>
        )}
        {/* {editMode && (
          <div className="EventForm">
            <TicketForm
              values={this.props.formValues}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
              tickets={this.props.tickets}
            />
          </div>
        )} */}
      </div>
    );
  }
}
