import React from "react";
import { connect } from "react-redux";
// import { loadEvents, createEvent } from "../../actions/events";
import { getEvents, createEvent } from "../../actions/events";
import { Animated } from "react-animated-css";
import EventsList from "./EventsList";
// import EventFormContainer from "./EventFormContainer";
import EventForm from "./EventForm";
import { userId } from "../../jwt";

class EventsListContainer extends React.Component {
  componentDidMount() {
    // this.props.loadEvents();
    this.props.getEvents();
  }

  state = { editMode: false };

  onChange = event => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };
  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        picture: "",
        userId: this.props.userId
      }
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });

    this.props.createEvent(this.state.formValues);
  };

  render() {
    const { users, authenticated } = this.props;
    return (
      <div className="EventList">
        <Animated
          animationIn="bounceInUp"
          animationOut="fadeOut"
          isVisible={true}
        >
          <EventsList
            events={this.props.events}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            formValues={this.state.formValues}
            editMode={this.state.editMode}
            onEdit={this.onEdit}
            authenticated={this.props.authenticated}
          />
        </Animated>
        {!this.state.editMode && authenticated && (
          <button className="EventDetailsButtons" onClick={this.onEdit}>
            Add an event
          </button>
        )}
        {authenticated && this.state.editMode && (
          <div className="EditForm">
            <EventForm
              values={this.state.formValues}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              event={this.props.events}
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
      : Object.values(state.events).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { getEvents, createEvent }
)(EventsListContainer);
