import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article/Article";

const News = () => {
  const [posts, setPosts] = useState([]);

  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2021-09-09&" +
    "sortBy=popularity&" +
    "apiKey=9000c3e3f0c4432ca2175a1319fcc7f4";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.map((post, idx) => (
        <Article
          key={idx}
          author={post.author}
          img={post.urlToImage}
          title={post.title}
          description={post.description}
          url={post.url}
          content={post.content}
          publishedAt={post.publishedAt}
        />
      ))}
    </div>
  );
};

export default News;
