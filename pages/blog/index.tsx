import { GetServerSideProps } from "next";

const Blog = (props) => {
  console.log("props of server side redernfing", props);
  return <h1>Blog about CAT</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/products");
  const result = await res.json();
  return { props: { res: result } };
};

export default Blog;
