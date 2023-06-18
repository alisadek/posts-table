import { PostsActionTypes, PostsState } from './postsTypes';

const initialState: PostsState = {
  loading: false,
  data: [],
  error: null,
};

const postsReducer = (state = initialState, action: any): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case PostsActionTypes.DELETE_POST:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case PostsActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
 