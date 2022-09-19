import { useRouter } from "next/router";

const CatPost = () => {
  const router = useRouter();
  const catID = router.query.catId;
  return <div>Cat Page {catID}</div>;
};

export default CatPost;
