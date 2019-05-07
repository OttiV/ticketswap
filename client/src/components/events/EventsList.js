import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventsList.css";

export default class EventsList extends Component {
  renderEvent = (event)  => {
    return (
      <li className="Events" key={event.id}>
        <Link to={`/events/${encodeURIComponent(event.id)}`}>
          {event.name} <br />
          <img className="images" src={event.picture} alt={event.description} />
        </Link>
      </li>
    );
  }

  render() {
    const { events } = this.props;
    console.log("TEST PROPS EVENTLIST", events)

    return (
      <div className="EventsList">
        {/* <h1 className="Ticketswap">Ticketswap</h1> */}

        {!events && "Loading..."}

        {events && <ul>{events.map(this.renderEvent)}</ul>}
      </div>
    );
  }
}
