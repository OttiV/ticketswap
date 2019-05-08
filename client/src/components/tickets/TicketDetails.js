import React from "react";
import TicketForm from "./TicketForm";
import CommentsListContainer from "../comments/CommentsListContainer"

import { Link } from "react-router-dom";
import "../events/EventDetails.css";

export default function TicketDetails(props) {
  return (
    <div className="EventDetailsContainer">
      {props.ticket && !props.editMode && (
        <div className="EventDetails">
          <img
            className="images"
            src={props.ticket.picture}
            alt={props.ticket.description}
          />
          <p>{props.ticket.description} </p>
          <p>{props.ticket.price} </p>
          <button className="EventDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>
          <CommentsListContainer comments={props.comments} tickets={props.tickets} />
        </div>
      )}
      {props.editMode &&  (
        <div className="EventForm">
          <TicketForm
            values={props.formValues}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
            ticket={props.ticket}
          />
        </div>
      )}

      {/* COMMENT SECTION 
      with comment.userId
      comment.comment*/}

      {/* ADD COMMENT SECTION 
      only if signed in
      with textarea*/}

      <Link to="/">
        <button className="EventDetailsButtons">Home</button>
      </Link>
    </div>
  );
}
