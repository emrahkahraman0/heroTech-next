import getUser from "@/libs/getUser";

export default async function UserPage({ params: { slug } }) {
  const userData = await getUser(slug);
  return (
    <div>
      <b>{userData.name}</b>
      <br />
      <b>{userData.username}</b>
      <br />
      <b>{userData.phone}</b>
      <br />
      <b>{userData.email}</b>
      <br />
      <b>{userData.phone}</b>
      <br />
      <b>{userData.address.street}</b>
      <br />
      <b>{userData.address.suite}</b>
      <br />
      <b>{userData.address.city}</b>
      <br />
      <b>{userData.address.zipcode}</b>
    </div>
  );
}
