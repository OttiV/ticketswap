import React from "react";
import "./CommentForm.css"

export default class CommentForm extends React.Component {
  render() {
   
    return (
      <form className={"CommentForm"} 
      onSubmit={this.props.onSubmit}>
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
      
        <button
          type="submit"
          className={"CommentForm_submitButton"}
          // onSubmit={this.props.onSubmit}
        >
          Add
        </button>
        </div>
      </form>
    );
  }
}