import { createAction } from '@reduxjs/toolkit';
import { Post, PostsActionTypes } from './postsTypes';

export const fetchPosts = createAction(PostsActionTypes.FETCH_POSTS);
export const fetchPostsSuccess = createAction<Post[]>(PostsActionTypes.FETCH_POSTS_SUCCESS);
export const fetchPostsFailure = createAction<string>(PostsActionTypes.FETCH_POSTS_FAILURE);

export const deletePost = createAction<number>(PostsActionTypes.DELETE_POST);
export const deletePostSuccess = createAction(PostsActionTypes.DELETE_POST_SUCCESS);
export const deletePostFailure = createAction<string>(PostsActionTypes.DELETE_POST_FAILURE);
