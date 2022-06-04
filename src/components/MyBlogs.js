import React from "react";
import { useGlobalContext } from "../context";
import LargeCard from "./LargeCard";

const MyBlogs = () => {
  const { isLoading, myBlog } = useGlobalContext();
  console.log(myBlog);
  return (
    <section>
      {myBlog.map((blog, index) => {
        return <LargeCard blog={blog} key={index} editable={true} />;
      })}
    </section>
  );
};

export default MyBlogs;
