export default async function AboutPage() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();
  return (
    <main className="p-8 max-w-xl border-2 rounded-lg m-6">
      <p className="text-foreground/70 mb-8">Stars: {data.stargazers_count}</p>
    </main>
  );
}
