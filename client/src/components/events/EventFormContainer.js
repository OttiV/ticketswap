import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../../actions/events";
import { userId } from "../../jwt";
import EventForm from "./EventForm";

class EventFormContainer extends React.Component {
  state = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    picture: "",
    userId: this.props.userId

  };

  onChange = event => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    this.props.createEvent(this.state);
    event.preventDefault();
    this.setState({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      picture: "",
      userId: this.props.userId
    });
  };

  render() {
    const { authenticated } = this.props;
    console.log("EVENT FORMMMM", this.props);
    return (
      <div>
         {authenticated && (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        authenticated={this.props.authenticated}
      />
      )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users === null ? null : state.users,
  event:
    state.event === null
      ? null
      : Object.values(state.events).sort((a, b) => b.id - a.id)
});
export default connect(
  mapStateToProps,
  { createEvent }
)(EventFormContainer);


