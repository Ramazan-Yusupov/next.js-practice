import { UserBoxClient } from "@/components/UserBoxClient";
import { fetchUserData } from "@/shared/lib/userData";
import { CodeBlock } from "@/shared/ui";

export default async function HomePage() {
  const data = await fetchUserData();

  return (
    <div className="inline-flex flex-col gap-4">
      <div className="grid grid-cols-4 max-w-5xl gap-4">
        {data.map((user) => (
          <UserBoxClient key={user.id} user={user} />
        ))}
      </div>
      <CodeBlock title="User Data" codeL=".tsx" />
    </div>
  );
}
