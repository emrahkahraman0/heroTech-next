async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  const response = await fetch(url);
  return await response.json();
}

async function Posts() {
  const posts = await fetchPosts();

  return (
    <>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>&gt; {post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
