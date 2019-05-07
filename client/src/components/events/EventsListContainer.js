import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";


class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents(this.props.events);
  }
  
  render() {
    console.log("TEST EVENT LIST CONTAINER",this.props)
    return (
      <>
        {Array.isArray(this.props.events) && <EventsList events={this.props.events} />}
        {console.log("SHOW THE PROPSSS", this.props)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events === null ?
  null : Object.values(state.games).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);

