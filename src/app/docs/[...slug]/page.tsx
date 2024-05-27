export default function Docs({ params }: { params: { slug: string[] } }) {
  console.log(params.slug);
  if (params.slug.length === 2) {
    return (
      <h2>
        {params.slug[0]} / {params.slug[1]}
      </h2>
    );
  } else if (params.slug.length === 1) {
    return <h2>{params.slug[0]}</h2>;
  }
  return <h1>Docs Page</h1>;
}