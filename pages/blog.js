import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Post, { POSTS_URL } from "../components/Post";
import FilterBar from "../components/FilterBar";

const Blog = ({ posts }) => {
  const [postsToShow, setPostsToShow] = useState(posts);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("desc");

  useEffect(() => {
    let filteredPosts = posts;

    // filter only if query is not empty
    if (query) {
      filteredPosts = posts.filter(
        p => p.title.toLowerCase().search(query) !== -1
      );
    }

    const postsWithoutDate = filteredPosts.filter(p => !p.date);

    const sortedPosts = filteredPosts
      // only filter posts with known dates
      .filter(p => p.date)
      .sort((p1, p2) =>
        sortBy === "desc"
          ? new Date(p2.date) - new Date(p1.date)
          : new Date(p1.date) - new Date(p2.date)
      );

    setPostsToShow([...sortedPosts, ...postsWithoutDate]);
  }, [query, sortBy]);

  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>

      <FilterBar
        handleSearch={event => setQuery(event.target.value)}
        handleSort={event => setSortBy(event.target.value)}
      />

      {postsToShow.length ? (
        postsToShow.map(post => <Post key={post.id} post={post} />)
      ) : (
        <div>no results</div>
      )}
    </Layout>
  );
};

const fetchPosts = async () => {
  try {
    const { data: posts } = await axios.get(POSTS_URL);

    return posts;
  } catch (error) {
    // show error message

    return [];
  }
};

Blog.getInitialProps = async () => {
  // fetch posts
  const posts = await fetchPosts();

  return { posts };
};

export default Blog;
