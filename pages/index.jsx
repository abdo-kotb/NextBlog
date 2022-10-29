import Head from 'next/head';
import FeaturedPosts from '../components/home_page/featured_posts';
import Hero from '../components/home_page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Abdulrhman's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
