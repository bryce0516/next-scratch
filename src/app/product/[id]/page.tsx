import React from 'react'

type Props = {}
// http://localhost:3000/product/1?country=ko
const ProductDetails = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { country: string };
}) => {
  console.log('params',params)
  console.log("searchParams", searchParams)
  return (
    <div>
      <h1>
      ProductDetails
      </h1>
    <h1>
      Product {params.id} / {searchParams.country} Details
    </h1>

    </div>
  )
}

export default ProductDetails