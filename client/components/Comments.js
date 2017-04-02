import React from 'react';

function Comments({comments}) {
  return (<div className="comments">
    {comments.map(renderComment)}
  </div>);
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