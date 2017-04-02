import {addComment, removeComment} from '../actions/actionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';

class Comments extends React.Component {
  render() {
    return (<div className="comments">
      {this.props.comments.map(this.renderComment.bind(this))}
      <form ref="commentForm"
            className="comment-form"
            onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" ref="user" placeholder="user" />
        <input type="text" ref="text" placeholder="text" />
        <input type="submit" hidden />
      </form>
    </div>);
  }

  renderComment(comment, index) {
    return (<div key={index} className="comment">
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment"
                onClick={() => this.props.removeComment(this.props.postId, index)}>
          &times;
        </button>
      </p>
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
    this.refs.commentForm.reset();
  }

  handleRemove(index) {

  }
}

function renderComment(comment, index, removeComment) {
}

Comments.propTypes = {
  // Provided by parent component.
  comments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  postId: React.PropTypes.string.isRequired,
  // Provided by connect.
  addComment: React.PropTypes.func.isRequired,
  removeComment: React.PropTypes.func.isRequired,
};

export default connect(
  undefined /* mapStateToProps */,
  dispatch => bindActionCreators({addComment, removeComment}, dispatch)
)(Comments);