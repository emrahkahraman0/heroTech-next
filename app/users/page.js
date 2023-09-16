import Link from "next/link";
import getUsers from "../libs/getUsers";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className="users">
      <h1>users</h1>
      {users.map(user => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
}
