export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface PostsState {
    loading: boolean;
    data: Post[];
    error: string | null;
    singlePost: Post | null; 
  }
  
  export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',

    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAILURE = 'FETCH_POST_FAILURE',

    UPDATE_POST = 'UPDATE_POST',
    UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS',
    UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE',

    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_FAILURE = 'DELETE_POST_FAILURE',
  }
  