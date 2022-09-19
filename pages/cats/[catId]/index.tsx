import { useRouter } from "next/router";

const CatPost = () => {
  const router = useRouter();
  const catID = router.query.catId;

  const handleDetailsClick = () => {
    router.push(`/cats/${catID}//publicReview/${catID}`);
  }

  return (
    <div>
      <h1>Cat Page {catID}</h1>
      <h2 onClick={handleDetailsClick}>Details of Cat</h2>
      <h2>Public review of Cat</h2>
    </div>
  );
};

export default CatPost;
