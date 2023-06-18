import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchPostsSuccess, fetchPostsFailure, deletePostSuccess, deletePostFailure } from './postsActions';
import { Post, PostsActionTypes } from './postsTypes';
import { SagaIterator } from 'redux-saga';

function* fetchPostsSaga():SagaIterator  {
  try {
    const response = yield call(axios.get<Post[]>, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error:any) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* deletePostSaga(action: PayloadAction<number>):SagaIterator  {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    yield put(deletePostSuccess());
  } catch (error:any) {
    yield put(deletePostFailure(error.message));
  }
}

function* postsSaga():SagaIterator  {
  yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(PostsActionTypes.DELETE_POST, deletePostSaga);
}

export default postsSaga;
