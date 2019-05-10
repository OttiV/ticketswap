import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../../actions/events";
import EventForm from "./EventForm";

class EventFormContainer extends React.Component {
  state = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    picture: ""
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
      picture: ""
    });
  };

  render() {
    const { authenticated } = this.props;
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


