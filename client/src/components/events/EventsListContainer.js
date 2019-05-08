import React from "react";
import { loadEvents } from "../../actions/events";
import { connect } from "react-redux";
// import {getUsers} from '../../actions/users'
import EventsList from "./EventsList";
// import {Redirect} from 'react-router-dom'

class EventsListContainer extends React.Component {
  componentDidMount() {
    // if (this.props.authenticated) {
    // if (this.props.events === null)
    this.props.loadEvents();
    //   if (this.props.users === null) this.props.getUsers()
    // }
  }

  render() {
    console.log("TEST EVENT LIST CONTAINER", this.props);
    return (
      <>
        {Array.isArray(this.props.events) && (
          <EventsList events={this.props.events} />
        )}
        {console.log("SHOW THE PROPSSS", this.props)}
      </>
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
  {
    loadEvents
    // , getUsers, createEvent
  }
)(EventsListContainer);
