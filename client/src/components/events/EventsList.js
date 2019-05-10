import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventForm from "./EventForm"
import "./EventsList.css";

export default class EventsList extends Component {
  renderEvent = event => {
    return (
      <div className="Events" key={event.id}>
        <Link to={`/events/${encodeURIComponent(event.id)}`}>
         <div className="EventName"> {event.name} </div><br />
          <img className="images" src={event.picture} alt={event.description} />
        </Link>
      </div>
    );
  };

  render() {
    const { events,editMode,authenticated } = this.props;

    return (
      <div className="EventsList">
        {!events && "Loading..."}

        {events && !editMode && (
          <div>
            {events.map(event => event.map(e => this.renderEvent(e)))}
          </div>
          )}
        <div>
        {!editMode && authenticated &&(<button className="EventDetailsButtons" onClick={this.props.onEdit}>
            Add Event
          </button>)}
        </div>
       {editMode && (
        <div className="EditForm">
          <EventForm
            values={this.props.formValues}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
          />
        </div>
      )}
      </div>
    );
  }
}
