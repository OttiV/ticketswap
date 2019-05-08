import React from "react";
import EventForm from "./EventForm";
import { Link } from "react-router-dom";
import "./EventDetails.css"

export default function EventDetails(props) {
  console.log("PROPSSSS", props.event);
  return (
    <div className="EventDetailsContainer">
      {props.event && !props.editMode && (
        <div className="EventDetails">
          <h1>{props.event.name} </h1>
          <p>{props.event.description} </p>
          <p>{props.event.startDate} </p>
          <p>{props.event.endDate} </p>
          <img className="images" src={props.event.picture} alt={props.event.description} />
          <p>{props.event.tickets}</p>
          <br/>
          <button className="EventDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>
        </div>
      )}
      {props.editMode && (
        <div className="EventForm">
          <EventForm
            values={props.formValues}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
        </div>
      )}
      <Link to="/">
        <button className="EventDetailsButtons">Home</button>
      </Link>
    </div>
  );
}
