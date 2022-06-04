import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  ADD_STORY,
} from "./data/actions";
import reducer from "./reducer";

const API_ENDPOINT =
  "https://newsapi.org/v2/everything?q=blog&apiKey=f6690e0a17614924a14aee67d2ec5c01";

const initialState = {
  isLoading: true,
  query: "blogs",
  allBlog: [],
  myBlog: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDummyData = async () => {
    const response = await axios(API_ENDPOINT + "&page=3");
    console.log(response.data);
    dispatch({ type: SET_STORIES, payload: response.data.articles });
  };

  useEffect(() => {
    setDummyData();
  }, []);

  //   console.log(state);

  const addStory = (blog) => {
    dispatch({ type: ADD_STORY, payload: blog });
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage, addStory }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
