import React from "react";
import { loadEvents, createEvent } from "../../actions/events";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
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
      editMode: true
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    console.log("this.state test", this.state);
    this.props.createEvent(this.state.formValues);
  };

  render() {
    console.log("TEST EVENT LIST CONTAINER", this.props);
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
        />
</Animated>
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
  { loadEvents, createEvent }
)(EventsListContainer);
