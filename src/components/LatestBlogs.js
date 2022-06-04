import axios from "axios";
import React, { useEffect, useState } from "react";
import LargeCard from "./LargeCard";

const LatestBlogs = () => {
  const [state, setState] = useState(false);

  const getData = async () => {
    const response = await axios(
      "https://newsapi.org/v2/everything?q=blog&apiKey=f6690e0a17614924a14aee67d2ec5c01"
    );
    // console.log(response.data);
    setState(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      {state &&
        state.articles.slice(0, 5).map((blog, index) => {
          return <LargeCard blog={blog} key={index} />;
        })}
    </section>
  );
};

export default LatestBlogs;
