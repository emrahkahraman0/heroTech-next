export default async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with user`);
  }

  return response.json();
}
