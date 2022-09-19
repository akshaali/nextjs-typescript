import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const {catId, publicReviewId} = router.query;
  return <div> Review id {publicReviewId} of Cat id {catId}</div>;
};

export default Details;
