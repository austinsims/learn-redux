/**
 * @param {?Array<!Object>} state Array of post objects. Keys:
 *     postId: string
 *     caption: string
 *     likes: number
 *     id: string
 *     display_src: string. URL to image on Instagram CDN
 * @param {*} action 
 */
export default function posts(state = [], action) {
  console.log('posts reducer');
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const {postId} = action;
      const postsWithoutChangedPost =
          state.filter(post => post.postId !== postId);
      const post = state.find(post => post.postId === postId);
      const changedPost = {...post, likes: post.likes + 1};
      return [...postsWithoutChangedPost, changedPost];
    default:
      return state;
  }
}