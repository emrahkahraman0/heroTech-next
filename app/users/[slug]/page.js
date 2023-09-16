import getUser from "../libs/getUser";

export default async function UserPage({ params: { slug } }) {
  const userData = await getUser(slug);
  return (
    <div>
      <h1>{userData.name}</h1>
    </div>
  );
}
