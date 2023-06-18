import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchPostsSuccess, fetchPostsFailure, deletePostSuccess, deletePostFailure, fetchPostSuccess, fetchPostFailure, updatePostSuccess, updatePostFailure } from './postsActions';
import { Post, PostsActionTypes } from './postsTypes';
import { SagaIterator } from 'redux-saga';

function* fetchPostsSaga(action: PayloadAction<string>):SagaIterator  {
  try {
    const searchQuery: string = action.payload;
    const response = yield call(axios.get<Post[]>, 'https://jsonplaceholder.typicode.com/posts', { params: { q: searchQuery } });
    yield put(fetchPostsSuccess(response.data));
  } catch (error:any) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostSaga(action: PayloadAction<number>): SagaIterator {
  try {
    const response = yield call(axios.get<Post>, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    yield put(fetchPostSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostFailure(error.message));
  }
}

function* updatePostSaga(action: PayloadAction<Post>): SagaIterator {
  try {
    const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, action.payload);
    yield put(updatePostSuccess(response.data));
  } catch (error: any) {
    yield put(updatePostFailure(error.message));
  }
}

function* deletePostSaga(action: PayloadAction<number>):SagaIterator  {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    yield put(deletePostSuccess(action.payload));
  } catch (error:any) {
    yield put(deletePostFailure(error.message));
  }
}

function* postsSaga():SagaIterator  {
  yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(PostsActionTypes.FETCH_POST, fetchPostSaga);
  yield takeEvery(PostsActionTypes.UPDATE_POST, updatePostSaga);
  yield takeEvery(PostsActionTypes.DELETE_POST, deletePostSaga);
}

export default postsSaga;
