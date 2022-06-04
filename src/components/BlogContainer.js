import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/constant";
import LatestBlogs from "./LatestBlogs";
import MyBlogs from "./MyBlogs";
import useStyles from "./styles";

const BlogContainer = () => {
  const [showMyBlog, setShowMyBlog] = useState({
    id: 0,
    status: false,
  });
  const classes = useStyles();

  const handleClick = (text, id) => {
    console.log(text, "working");

    if (text === "latest blogs") setShowMyBlog({ status: false, id });
    else setShowMyBlog({ status: true, id });
  };

  return (
    <section className="section" id="latest">
      <div className={classes.blogRouter}>
        {blogs.map((item, index) => {
          return (
            <span
              onClick={() => handleClick(item.text, item.id)}
              key={index}
              className={showMyBlog.id === item.id ? classes.active : ""}
            >
              {item.text}
            </span>
          );
        })}
      </div>

      <div className={classes.blogContainer}>
        {showMyBlog.status ? <MyBlogs /> : <LatestBlogs />}
      </div>
    </section>
  );
};

export default BlogContainer;
