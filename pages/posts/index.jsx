import Head from 'next/head';
import React from 'react';
import AllPosts from '../../components/posts/all_posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming tutorials"
        />
      </Head>

      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default AllPostsPage;
