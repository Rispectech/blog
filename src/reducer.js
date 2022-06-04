import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  ADD_STORY,
  SET_LOCAL_STORAGE,
  ALL_BLOGS,
} from "./data/actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        myBlog: action.payload,
      };
    case REMOVE_STORY:
      return {
        ...state,
        myBlog: state.myBlog.filter((story) => story.publishedAt !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case ADD_STORY:
      return {
        ...state,
        myBlog: [...state.myBlog, action.payload],
      };

    case ALL_BLOGS:
      // console.log(action.payload);
      return {
        ...state,
        allBlog: [...action.payload],
      };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
