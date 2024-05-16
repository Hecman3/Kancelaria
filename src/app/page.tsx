import { client } from "../../sanity/lib/client";

async function getContent() {
  const CONTENT_QUERY = `*[_type == "project"] {
    ...,
    coverImage {
      ...,
      asset->
    },
    duration {
      ...
    },
    tags[],
    body
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export default async function Home() {
  const content = await getContent();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {content[0].title}
    </main>
  );
}
