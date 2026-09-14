import { UserBoxClient } from "./UserBoxClient";
import { fetchUserData } from "./shared/lib/userData";

export default async function HomePage() {
  const data = await fetchUserData();

  return (
    <div className="grid grid-cols-4 max-w-5xl gap-4">
      {data.map((user) => (
        <UserBoxClient key={user.id} user={user} />
      ))}
    </div>
  );
}
