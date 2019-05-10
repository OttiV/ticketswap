import React from "react";
import "./CommentForm.css"

export default class CommentForm extends React.Component {
  render() {
    return (
      <form className={"CommentForm"} onSubmit={this.props.onSubmit}>
      <div className="Border">
        <h2>Leave a comment:</h2>
        <label htmlFor="comment">Comment:</label>
        <br/>
        <textarea
          name="comment"
          value={this.props.comment}
          onChange={this.props.onChange}
          className={"CommentForm__input"}
        />
         <br />
        <label htmlFor="userId">Your user id:</label>
        <br />
        <input
          name="userId"
          value={this.props.userId}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br/>
        <label htmlFor="ticketId">This ticket id:</label>
        <br />
        <input
          name="ticketId"
          value={this.props.ticketId}
          onChange={this.props.onChange}
          className={"EventForm_input"}
        />
        <br/>
        <button
          type="submit"
          className={"CommentForm_submitButton"}
          onSubmit={this.props.onSubmit}
        >
          Add
        </button>
        </div>
      </form>
    );
  }
}