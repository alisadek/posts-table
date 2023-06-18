export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface PostsState {
    loading: boolean;
    data: Post[];
    error: string | null;
  }
  
  export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_FAILURE = 'DELETE_POST_FAILURE',
  }
  