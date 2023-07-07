/* eslint-disable camelcase */
import ListBlog from "@components/contents/blog/ListBlog";

export const metadata = {
  title: "Blog | @akbarsaputrait",
  description: "List of blog posts from Akbar Anung Yudha Saputra",
  authors: {
    name: "Akbar Anung Yudha Saputra",
    url: "https://github.com/akbarsaputrait",
  },
};

export default function Blog() {
  return <ListBlog />;
}
