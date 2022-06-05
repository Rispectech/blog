import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  ADD_STORY,
  GET_LOCAL_STORAGE,
  SET_LOCAL_STORAGE,
  ALL_BLOGS,
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
    const response = await axios(API_ENDPOINT + "&page=3", { Origin: "localhost" });
    // console.log(response.data);
    dispatch({ type: SET_STORIES, payload: response.data.articles });
  };

  // useEffect(() => {
  //   setDummyData();
  // }, []);

  //   console.log(state);

  const addStory = (blog) => {
    dispatch({ type: ADD_STORY, payload: blog });
  };

  const setAllBlogs = async () => {
    const response = await axios(
      "https://newsapi.org/v2/everything?q=blog&apiKey=f6690e0a17614924a14aee67d2ec5c01",
      { Origin: "localhost" }
    );
    console.log(response.data);
    dispatch({ type: ALL_BLOGS, payload: response.data.articles });
  };

  const setlocal = (name) => {
    // console.log(state.myBlog);
    localStorage.setItem(name, JSON.stringify(state.myBlog));
  };

  const getlocal = (name) => {
    const data = JSON.parse(localStorage.getItem(name));
    // console.log(data);
    if (data && data.length > 0) dispatch({ type: SET_STORIES, payload: data });
    // else setDummyData();
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

  useEffect(() => {
    getlocal("my-blog");
    setAllBlogs();
  }, []);

  useEffect(() => {
    setlocal("my-blog");
  }, [state.myBlog]);

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
