import { useRouter } from "next/router";
function article({ article }) {
  const router = useRouter();
  return (
    <>
      <div>this is an article number {router.query.id}</div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </>
  );
}

export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
