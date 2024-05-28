import React from 'react'

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <h1>Layout of productId</h1>
      {children}
    </div>
  );
}