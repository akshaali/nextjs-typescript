import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { result } from "@types";

const CatPost = (props: { res: result }) => {
  const router = useRouter();
  const catID = router.query.catId;

  console.log('Datattta', props);

  const handleDetailsClick = () => {
    router.push(`/cats/${catID}//publicReview/${catID}`);
  };
  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h1>Cat Page {catID}</h1>
      <h2 onClick={handleDetailsClick}>Details of Cat</h2>
      <h2>Public review of Cat</h2>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?format=json&limit=25"
  );
  const result = await res.json();
  const paths = result.map((post: result) => {
    return { params: { catId: `${post.id}` } };
  });
  return { paths: paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params = {} } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.catId}`
  );
  const result = await res.json();
  // if (!result.id) {
  //   return { notFound: true };
  // }
 
  return { props: { res: result } };
};

export default CatPost;
