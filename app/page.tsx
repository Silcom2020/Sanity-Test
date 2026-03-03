import { client } from "@/lib/sanity";

async function getPosts() {
  return client.fetch(`*[_type == "post"]{
    title,
    slug,
    publishedAt
  }`);
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Blog</h1>
      {posts.map((post: any) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </main>
  );
}