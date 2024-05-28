import { Metadata } from "next";

type Props = {
  params: { productId: string };
  searchParams?: { country: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product Car ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function ProductDetails({ params, searchParams }: Props) {
  return (
    <h1>
      Product {params.productId} / {searchParams?.country} Details
    </h1>
  );
}