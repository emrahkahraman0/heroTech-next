import Link from "next/link";
import getPosts from "@/libs/getPosts";

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map(posts => {
        return (
          <>
            <p key={posts.id}>
              <Link href={`/posts/${posts.id}`}>{posts.title}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
}
