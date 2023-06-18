import { createAction } from '@reduxjs/toolkit';
import { Post, PostsActionTypes } from './postsTypes';

export const fetchPosts = createAction(PostsActionTypes.FETCH_POSTS);
export const fetchPostsSuccess = createAction<Post[]>(PostsActionTypes.FETCH_POSTS_SUCCESS);
export const fetchPostsFailure = createAction<string>(PostsActionTypes.FETCH_POSTS_FAILURE);

export const fetchPost = createAction<number>(PostsActionTypes.FETCH_POST);
export const fetchPostSuccess = createAction<Post>(PostsActionTypes.FETCH_POST_SUCCESS);
export const fetchPostFailure = createAction<string>(PostsActionTypes.FETCH_POST_FAILURE);

export const updatePost = createAction<Post>(PostsActionTypes.UPDATE_POST);
export const updatePostSuccess = createAction<Post>(PostsActionTypes.UPDATE_POST_SUCCESS);
export const updatePostFailure = createAction<string>(PostsActionTypes.UPDATE_POST_FAILURE);

export const deletePost = createAction<number>(PostsActionTypes.DELETE_POST);
export const deletePostSuccess = createAction<number>(PostsActionTypes.DELETE_POST_SUCCESS);
export const deletePostFailure = createAction<string>(PostsActionTypes.DELETE_POST_FAILURE);
