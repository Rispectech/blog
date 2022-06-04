import React from "react";
import { useGlobalContext } from "../context";
import LargeCard from "./LargeCard";
import useStyles from "./styles";

const MyBlogs = () => {
  const classes = useStyles();
  const { isLoading, myBlog } = useGlobalContext();
  // console.log(myBlog);

  const newblog = myBlog.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  // console.log(newblog);
  return (
    <section className={classes.height}>
      {myBlog.map((blog, index) => {
        return <LargeCard blog={blog} key={index} editable={true} />;
      })}
    </section>
  );
};

export default MyBlogs;
