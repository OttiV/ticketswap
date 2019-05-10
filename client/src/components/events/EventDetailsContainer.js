import React from "react";
import { connect } from "react-redux";
import { loadEvent } from "../../actions/events";
import { createTicket } from "../../actions/tickets";
import EventDetails from "./EventDetails";
import TicketForm from "../tickets/TicketForm";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.id);
  }

  state = { editMode: false };

  onChange = ticket => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.value
      }
    });
  };
  onEdit = () => {
    this.setState({
      editMode: true
    });
  };

  onSubmit = ticket => {
    ticket.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.createTicket(this.state.formValues);
  };

  render() {
    
    const { authenticated} = this.props;
    return (
      <div className="EventDetailsContainer">
        <EventDetails
          event={this.props.event}
          onEdit={this.props.onEdit}
          editMode={this.state.editMode}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          formValues={this.state.formValues}
          authenticated={this.props.authenticated}
        />
       
        {authenticated && (
          <div>
          <h2>Add a ticket</h2>
          <TicketForm
            TicketForm
            values={this.props.formValues}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            ticket={this.props.ticket}
          />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  user: state.user,
  event: state.event,
  ticket: state.ticket
});

export default connect(
  mapStateToProps,
  {
    loadEvent,
    createTicket
  }
)(EventDetailsContainer);
