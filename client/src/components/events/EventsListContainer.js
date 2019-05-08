import React from "react";
import { loadEvents } from "../../actions/events";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    console.log("TEST EVENT LIST CONTAINER", this.props);
    const authenticated = this.props.authenticated;
    return (
      <div className="EventList">
        <EventsList events={this.props.events} />

        {authenticated && (
          <Link to={`/eventsForm`}>
            <button className="AddEventButton">Add Event</button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  events:
    state.events === null
      ? null
      : Object.values(state.events).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);
