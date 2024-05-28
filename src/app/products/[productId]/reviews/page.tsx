import React from 'react'

type Props = {}

export default function Reviews(props: {
  params: { productId: string };
  searchParams: { country: string };
}) {
  console.log(props);
  return (
    <h1>
      Reviews Page and productId : {props.params.productId}, Country:{" "}
      {props.searchParams.country}
    </h1>
  );
}