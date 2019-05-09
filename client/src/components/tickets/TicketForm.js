import React from "react";
import "../events/EventForm.css";

export default class TicketForm extends React.Component {
  render() {
    return (
      <form className={"EventForm"} onSubmit={this.props.onSubmit}>

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
        <label htmlFor="price">Price:</label>
        <br />
        <input
          name="price"
          value={this.props.price}
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
          Submit
        </button>
      </form>
    );
  }
}
