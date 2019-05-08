import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent } from "../../actions/events";
// import { loadTickets } from "../../actions/tickets";


class EventDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("PROPS EVENT DET CONT", this.props.match.params.id);
    this.props.loadEvent(this.props.match.params.id);
    // this.props.loadTickets(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <EventDetails event={this.props.event} />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  // ticket: state.ticket
});

export default connect(
  mapStateToProps,
  { loadEvent
    // , loadTickets 
  }
)(EventDetailsContainer);
