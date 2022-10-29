import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirctory = path.join(process.cwd(), 'content/posts');

export const getPostsFiles = () => fs.readdirSync(postsDirctory);

export const getPostData = postIdentifier => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirctory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles
    .map(postFile => getPostData(postFile))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
};
