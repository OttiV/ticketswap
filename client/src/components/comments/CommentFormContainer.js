import React from 'react'
import {connect} from 'react-redux'
import {createComment} from "../../actions/comments"
import CommentForm from './CommentForm'

class CommentFormContainer extends React.Component {
  state = {
    comment: ""
  }

  onChange = comment => {
    this.setState({
      [comment.target.name]: comment.target.value
    })
  }

  onSubmit = comment => {
    this.props.createComment(this.state)
    comment.preventDefault()
    this.setState({
        comment: ""
    })
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