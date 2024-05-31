export default function InterceptedModalPhotoId({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Intercepted Photo Id {params.id}</h1>;
}