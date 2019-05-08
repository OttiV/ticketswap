import React from "react";
// import EventForm from "./EventForm";
import TicketsListContainer from "../tickets/TicketsListContainer";
import { Link } from "react-router-dom";
import "./EventDetails.css";

export default function EventDetails(props) {
  // console.log("PROPS IN EVENT DETAILS", props.match.params.id);
  return (
    <div className="EventDetailsContainer">
      {props.event && !props.editMode && (
        <div className="EventDetails">
          <h1>{props.event.name} </h1>
          <p>{props.event.description} </p>
          <p>{props.event.startDate} </p>
          <p>{props.event.endDate} </p>
          <img
            className="images"
            src={props.event.picture}
            alt={props.event.description}
          />
        </div>
      )}
     { <TicketsListContainer tickets={props.tickets}/>}
      <Link to="/">
        <button className="EventDetailsButtons">Home</button>
      </Link>
    </div>
  );
}
