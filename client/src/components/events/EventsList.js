import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const { events } = this.props;

    return (
      <div className="EventsList">
        {!events && "Loading..."}

        {events && (
          <div>
            {events.map(event => event.map(e => this.renderEvent(e)))}
          </div>
        )}
      </div>
    );
  }
}
