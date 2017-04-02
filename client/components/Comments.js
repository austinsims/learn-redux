import React from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/actionCreators';

class Comments extends React.Component {
  render() {
    return (<div className="comments">
      {this.props.comments.map(renderComment)}
      <form ref="commentForm"
            className="comment-form"
            onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" ref="user" placeholder="user" />
        <input type="text" ref="text" placeholder="text" />
        <input type="submit" hidden />
      </form>
    </div>);
  }

  handleSubmit(event) {
    // Stop page from refreshing.
    event.preventDefault();

    const user = this.refs.user.value;
    const text = this.refs.text.value;
    if (!user || !text) {
      alert('You must enter both user and text.');
      return;
    }

    this.props.addComment(this.props.postId, user, text);
  }
}

Comments.propTypes = {
  // Provided by parent component.
  comments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  postId: React.PropTypes.string.isRequired,
  // Provided by connect.
  addComment: React.PropTypes.func.isRequired,
};

function renderComment(comment, index) {
  return (<div key={index} className="comment">
    <p>
      <strong>{comment.user}</strong>
      {comment.text}
      <button className="remove-comment">&times;</button>
    </p>
  </div>);
}

export default connect(
  undefined /* mapStateToProps */,
  dispatch => ({
    addComment: (postId, user, text) => dispatch(addComment(postId, user, text))
  }),
)(Comments);