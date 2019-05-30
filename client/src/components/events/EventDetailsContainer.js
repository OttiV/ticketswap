import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/events";
import { getTickets, createTicket } from "../../actions/tickets";
import EventDetails from "./EventDetails";
import TicketForm from "../tickets/TicketForm";
import { userId } from "../../jwt";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
    this.props.getTickets();
  }

  state = { editMode: false };

  onChange = ticket => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.value
      },

    });
  };
  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        description: "",
        price: "",
        picture: "",
        userId: this.props.userId,
        eventId: this.props.match.params.id
      },

    });
  };

  onSubmit = ticket => {
    console.log('this.state.formValues', this.state.formValues)
    ticket.preventDefault();
    this.setState({
      editMode: false
    });
    
    this.props.createTicket(this.state.formValues);
  };

  render() {
    const { authenticated, events, tickets } = this.props;
    const editMode = this.state.editMode;
    const thisEvent =
      events && events.find(event => event.id == this.props.match.params.id);

    return (
      <div className="EventDetailsContainer">
        {!editMode && events  &&(
          <div>
            <EventDetails
              events={this.props.events}
              onEdit={this.onEdit}
              editMode={this.state.editMode}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              formValues={this.state.formValues}
              authenticated={this.props.authenticated}
              thisEvent={thisEvent}
              tickets={this.props.tickets}
              eventId={this.props.match.params.id}
            />
            <button className="EventDetailsButtons" onClick={this.onEdit}>Add Ticket</button>
          </div>
        )}
        {authenticated && editMode && (
          <div>
            <h2>Add a ticket</h2>
            <TicketForm
              TicketForm
              values={this.state.formValues}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              tickets={this.props.tickets}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  userId: state.currentUser && userId(state.currentUser.jwt),
  events:
    state.events === null
      ? null
      : Object.values(state.events).sort((a, b) => b.id - a.id),
  tickets: state.tickets 
});

export default connect(
  mapStateToProps,
  {
    getTickets,
    getEvents,
    createTicket
  }
)(EventDetailsContainer);
