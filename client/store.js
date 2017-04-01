import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import comments from './data/comments';
import createBrowserHistory from 'history/createBrowserHistory';
import posts from './data/posts';
import rootReducer from './reducers/index';

const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;