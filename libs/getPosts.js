export default async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}
