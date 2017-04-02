import React from 'react';

class Comments extends React.Component {
  render() {
    return (<div className="comments">
      {this.props.comments.map(renderComment)}
      <form ref="commentForm" className="comment-form">
        <input type="text" ref="user" placeholder="user" />
        <input type="text" ref="text" placeholder="text" />
        <input type="submit" hidden />
      </form>
    </div>);
  }
}

function renderComment(comment, index) {
  return (<div key={index} className="comment">
    <p>
      <strong>{comment.user}</strong>
      {comment.text}
      <button className="remove-comment">&times;</button>
    </p>
  </div>);
}

export default Comments