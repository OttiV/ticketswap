import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
// import CreateEventFormContainer from "./CreateEventFormContainer";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents(this.props.events);
  }

  render() {
    return (
      <>
        {Array.isArray(this.props.events) && <EventsList events={this.props.events} />}
        {console.log(this.props)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);
