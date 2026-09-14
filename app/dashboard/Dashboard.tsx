export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="p-8 max-w-xl border-2 rounded-lg m-6">
      <div className="">Dashboard - Stars: {data.owner.id}</div>
      <div className="">Dashboard - Name: {data.owner.login}</div>
      <div className="">Dashboard - Node ID: {data.owner.node_id}</div>
      <div className="">Dashboard - Avatar URL: {data.owner.avatar_url}</div>
      <div className="">Dashboard - HTML URL: {data.owner.html_url}</div>
      <div className="">Dashboard - URL: {data.owner.url}</div>
    </div>
  );
}
