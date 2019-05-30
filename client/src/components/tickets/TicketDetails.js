import React, { Component } from "react";
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
    const comments = this.props.comments;

    const { authenticated, editMode, thisTicket } = this.props;
    const ticketComments = comments && comments.filter(comment => comment.ticketId == this.props.ticketId);

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
              <p>Fraud risk:{this.props.thisTicket.fraudrisk}%</p>

              <img
                className="images"
                src={this.props.thisTicket.picture}
                alt={this.props.thisTicket.description}
              />
              <p>Description: {this.props.thisTicket.description} </p>
              <p>Price: € {this.props.thisTicket.price} </p>
            </Animated>
           
            <div className="CommentsList">
              {/* {ticketComments.length < 1 && "No comments have been posted"} */}
              {ticketComments && (
                <div>
                  <h2>Comments:</h2>

                  {ticketComments.map(comment => this.renderComment(comment))}
                </div>
              )}
            </div>
          </div>
        )}
        
      </div>
    );
  }
}
