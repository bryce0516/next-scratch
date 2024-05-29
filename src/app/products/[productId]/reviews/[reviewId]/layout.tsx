export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <h1>Layout of reviewId</h1>
      {children}
    </div>
  );
}