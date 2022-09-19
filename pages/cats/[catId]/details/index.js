import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const {catId} = router.query;
  return <div> Detail of Cat id {catId}</div>;
};

export default Details;
