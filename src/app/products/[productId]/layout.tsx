function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error occured when loading review ID");
  }

  return (
    <div className="flex flex-col">
      <h1>Layout of productId</h1>
      {children}
    </div>
  );
}