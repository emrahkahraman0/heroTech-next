import getPost from "@/libs/getPost";

export default async function PostPage({ params: { slug } }) {
  const postData = await getPost(slug);
  return (
    <div>
      <b>{postData.title}</b>
      <br />
      <i>{postData.body}</i>
    </div>
  );
}
