import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import LargeCard from "./LargeCard";
import useStyles from "./styles";

const LatestBlogs = () => {
  const classes = useStyles();
  const { allBlog, myBlog } = useGlobalContext();
  console.log(allBlog);
  // const [state, setState] = useState(false);

  // const getData = async () => {
  //   const response = await axios(
  //     "https://newsapi.org/v2/everything?q=blog&apiKey=f6690e0a17614924a14aee67d2ec5c01"
  //   );
  //   // console.log(response.data);
  //   setState(response.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const newblog = allBlog.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <section className={classes.height}>
      {myBlog.map((blog, index) => {
        return <LargeCard blog={blog} key={index} editable={true} />;
      })}
      {allBlog &&
        allBlog.slice(0, 9).map((blog, index) => {
          return <LargeCard blog={blog} key={index} />;
        })}
    </section>
  );
};

export default LatestBlogs;
