import React from "react";
import "./EventForm.css";
import { Link } from "react-router-dom";

export default class EventForm extends React.Component {
  render() {
    return (
      <div className={"EventForm"}>
      <form  onSubmit={this.props.onSubmit}>
        <label htmlFor="name">Title:</label>
        <br />
        <input
          name="name"
          value={this.props.name}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br />
        <label className="DescriptionLabel" htmlFor="description">
          Description:
        </label>
        <br />
        <input
          name="description"
          value={this.props.description}
          onChange={this.props.onChange}
          className={"EventForm_textarea"}
        />
        <br />
        <label htmlFor="start_date">Start Date:</label>
        <br />
        <input
          name="start_date"
          value={this.props.startDate}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br />
        <label htmlFor="end_date">End date:</label>
        <br />
        <input
          name="end_date"
          value={this.props.endDate}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br />
        <label htmlFor="picture">Picture url:</label>
        <br />
        <input
          name="picture"
          value={this.props.picture}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br />
        <button
          type="submit"
          className={"EventForm_submitButton"}
          onSubmit={this.props.onSubmit}
        >
          Add
        </button>
      </form>
      <Link to="/">
      <button className="EventDetailsButtons">Home</button>
    </Link>
    </div>
    );
  }
}
