import { PostsActionTypes, PostsState } from './postsTypes';

const initialState: PostsState = {
  loading: false,
  data: [],
  error: null,
  singlePost:null
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
    case PostsActionTypes.FETCH_POST:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePost: action.payload,
        error: null,
      };
    case PostsActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        singlePost: null,
        error: action.payload,
      };
    case PostsActionTypes.UPDATE_POST:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePost: action.payload,
        error: null,
      };
    case PostsActionTypes.UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
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
        // THIS FILTER IS ONLY ADDED TO MOCK THE DELETE FUNCTIONALITY ON THE UI
        data: state.data.filter((post) => post.id !== action.payload),
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
 