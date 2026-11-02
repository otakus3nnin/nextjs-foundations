export default async function DocsPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const path = params.slug.join('/');

  return (
    <div className="p-8">
      <h1 className="mb-4 font-bold text-2xl">Documentation</h1>
      <p className="mb-2">Full path: /docs/{path}</p>
      <p className="mb-4">Segments: {params.slug.length}</p>

      <ul className="list-disc pl-6">
        {params.slug.map((segment, i) => (
          <li key={i}>
            Segment {i} : {segment}
          </li>
        ))}
      </ul>
    </div>
  );
}
