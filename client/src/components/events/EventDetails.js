import React from "react";
// import Paper from "@material-ui/core/Paper";
import EventForm from "./EventForm";
import { Link } from "react-router-dom";
// import "./EventDetails.css";
// import { Animated } from "react-animated-css";

export default function AdDetails(props) {

  return (
    <div className="EventDetailsContainer">
      {props.event && !props.editMode && (
        <div className="EventDetails">
          <h1>{props.event.name} </h1>
          <p>{props.event.description} </p>
          <p>$ {props.event.price} </p>
          <img className="images" src={props.event.picture} alt={props.event.description} />
          <br/>
          {props.authenticated &&<button className="EventDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>}
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

