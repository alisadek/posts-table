import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
