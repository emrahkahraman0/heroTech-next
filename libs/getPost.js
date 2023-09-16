export default async function getUser(slug) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with user`);
  }

  return response.json();
}
