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
      [event.target.name]: event.target.value
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
    return (
      <div>
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
      </div>
    );
  }
}

export default connect(
  null,
  { createEvent }
)(EventFormContainer);

