import React from 'react'
import {connect} from 'react-redux'
import {createComment} from "../../actions/comments"
import CommentForm from './CommentForm'

class CommentFormContainer extends React.Component {
  state = {
    content: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        content: ""
    })
    this.props.createComment(this.state)
  }

  render() {
    return (<CommentForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createComment})(CommentFormContainer)